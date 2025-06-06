function FindProxyForURL(url, host) {
    // Прямой доступ к ключевым сайтам
    if (
        shExpMatch(host, "*.mos.ru") ||
        shExpMatch(host, "pgu.mos.ru") ||
        shExpMatch(host, "www.gosuslugi.ru") ||
        shExpMatch(host, "*.gosuslugi.ru")
    ) {
        return "DIRECT";
    }

    // Всё остальное — через Hiddify (SOCKS5)
    return "SOCKS5 127.0.0.1:12334";
}
