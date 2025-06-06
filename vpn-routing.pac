function FindProxyForURL(url, host) {
  if (dnsDomainIs(host, "mos.ru") ||
      dnsDomainIs(host, "www.mos.ru") ||
      shExpMatch(host, "*.mos.ru") ||
      dnsDomainIs(host, "pgu.mos.ru") ||
      shExpMatch(host, "*.pgu.mos.ru")) {
    return "DIRECT";
  }

  // Всё остальное через VPN-прокси (127.0.0.1:12334)
  return "SOCKS5 127.0.0.1:12334";
}
