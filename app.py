#!/usr/bin/env python3
"""Local desktop launcher for the Vegas Edge prototype.

This intentionally uses only Python's standard library so the hackathon demo can
run on a laptop without Node, Flask, or a package install.
"""

from __future__ import annotations

import argparse
import contextlib
import functools
import http.server
import socket
import socketserver
import sys
import webbrowser
from pathlib import Path


APP_DIR = Path(__file__).resolve().parent
DEFAULT_PORT = 8765


class VegasEdgeHandler(http.server.SimpleHTTPRequestHandler):
    """Static file handler with quiet logs and dev-friendly cache headers."""

    server_version = "VegasEdgePrototype/1.0"

    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        super().end_headers()

    def log_message(self, format: str, *args: object) -> None:
        print(f"[vegas-edge] {self.address_string()} - {format % args}")


class ThreadingTCPServer(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Run the Vegas Edge prototype locally.")
    parser.add_argument(
        "--host",
        default="127.0.0.1",
        help="Host interface to bind. Defaults to 127.0.0.1 for laptop-only access.",
    )
    parser.add_argument(
        "--port",
        type=int,
        default=DEFAULT_PORT,
        help=f"Preferred port. Defaults to {DEFAULT_PORT}; the launcher will find the next open port if occupied.",
    )
    parser.add_argument(
        "--no-browser",
        action="store_true",
        help="Start the local server without opening a browser tab.",
    )
    return parser.parse_args()


def port_is_available(host: str, port: int) -> bool:
    with contextlib.closing(socket.socket(socket.AF_INET, socket.SOCK_STREAM)) as probe:
        probe.settimeout(0.2)
        return probe.connect_ex((host, port)) != 0


def find_available_port(host: str, preferred_port: int) -> int:
    if preferred_port == 0:
        return 0

    for port in range(preferred_port, preferred_port + 50):
        if port_is_available(host, port):
            return port

    raise RuntimeError(
        f"No open port found from {preferred_port} through {preferred_port + 49}."
    )


def ensure_app_files() -> None:
    required = [
        APP_DIR / "index.html",
        APP_DIR / "recommend.html",
        APP_DIR / "game-profiles.html",
        APP_DIR / "styles.css",
        APP_DIR / "src" / "data.js",
        APP_DIR / "src" / "app.js",
        APP_DIR / "src" / "recommend.js",
        APP_DIR / "src" / "game-profile-content.js",
        APP_DIR / "src" / "game-profile-images.js",
        APP_DIR / "src" / "game-profiles.js",
        APP_DIR / "src" / "game-profile-detail.js",
        APP_DIR / "assets" / "game-profile-previews" / "blackjack-32.png",
        APP_DIR / "assets" / "game-profile-previews" / "low-limit-blackjack.png",
        APP_DIR / "assets" / "game-profile-previews" / "craps.png",
        APP_DIR / "assets" / "game-profile-previews" / "pai-gow-poker.png",
        APP_DIR / "assets" / "game-profile-previews" / "three-card-poker.png",
        APP_DIR / "assets" / "game-profile-previews" / "ultimate-texas-holdem.png",
        APP_DIR / "assets" / "game-profile-previews" / "double-zero-roulette.png",
        APP_DIR / "assets" / "game-profile-previews" / "triple-zero-roulette.png",
        APP_DIR / "assets" / "game-profile-previews" / "baccarat.png",
        APP_DIR / "assets" / "game-profile-previews" / "live-poker-cash-games.png",
        APP_DIR / "assets" / "game-profile-previews" / "sportsbook-betting-v2.png",
        APP_DIR / "game-profiles" / "blackjack-32.html",
        APP_DIR / "game-profiles" / "low-limit-blackjack.html",
        APP_DIR / "game-profiles" / "craps.html",
        APP_DIR / "game-profiles" / "pai-gow-poker.html",
        APP_DIR / "game-profiles" / "three-card-poker.html",
        APP_DIR / "game-profiles" / "ultimate-texas-holdem.html",
        APP_DIR / "game-profiles" / "double-zero-roulette.html",
        APP_DIR / "game-profiles" / "triple-zero-roulette.html",
        APP_DIR / "game-profiles" / "baccarat.html",
        APP_DIR / "game-profiles" / "live-poker-cash-games.html",
        APP_DIR / "game-profiles" / "sportsbook-betting.html",
        APP_DIR / "assets" / "vegas-edge-hero.png",
    ]
    missing = [path for path in required if not path.exists()]

    if missing:
        missing_list = "\n".join(f"  - {path}" for path in missing)
        raise FileNotFoundError(f"Required prototype files are missing:\n{missing_list}")


def run_server(host: str, port: int, open_browser: bool) -> None:
    ensure_app_files()
    selected_port = find_available_port(host, port)
    handler = functools.partial(VegasEdgeHandler, directory=str(APP_DIR))

    with ThreadingTCPServer((host, selected_port), handler) as httpd:
        actual_port = httpd.server_address[1]
        url = f"http://{host}:{actual_port}/"
        print("Vegas Edge prototype is running.")
        print(f"URL: {url}")
        print("Press Ctrl+C to stop.")

        if open_browser:
            webbrowser.open(url)

        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nStopping Vegas Edge.")


def main() -> int:
    args = parse_args()

    try:
        run_server(args.host, args.port, not args.no_browser)
    except Exception as exc:
        print(f"Unable to start Vegas Edge: {exc}", file=sys.stderr)
        return 1

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
