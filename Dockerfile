FROM nginx:alpine

# 把靜態網站放到 Nginx 預設目錄
COPY .dist/ /usr/share/nginx/html

# 可選：加上基本快取/SPA fallback（若需）
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]