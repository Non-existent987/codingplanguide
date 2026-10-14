// 站内链接前缀：主站 '/'，GitHub Pages 镜像 '/codingplanguide/'
export function base() {
  const b = import.meta.env.BASE_URL;
  return b.endsWith('/') ? b : b + '/';
}
