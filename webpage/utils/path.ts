export function isCurrentPath(pathname: string, href: string) {
  // Handle exact matches and normalize trailing slashes
  return pathname === href || pathname === href + '/' || pathname + '/' === href
}