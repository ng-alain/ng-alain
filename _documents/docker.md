# 关于Docker

`ng-alain` 提供了一个基于 `nginx` WEB服务完整的构建Angular项目的镜像文件。其中 `nginx` 是采用 [nginx:1.13.5-alpine](https://github.com/nginxinc/docker-nginx/blob/master/mainline/alpine/Dockerfile) 的镜像，基本上可以满足 `ng-alain` 项目的良好运行环境，倘若有更多需求，你可以利用 `docker run` 轻易的指定 *nginx.conf*。

## 一、构建镜像

根据 Dockerfile 构建一个完整的 ng-alain 所需要的运行环境的镜像。

```bash
docker build -t ng-alain .
```

## 二、运行

**基于compose（推荐）**

```bash
docker-compose up -d
```

其细节可以通过 `docker-compose.yml` 修改。

**基于命令式**

```bash
docker run -d -p 80:80 --name alain ng-alain
```

最后你可以访问：http://localhost/

## 三、关于SSL

`ng-alain` 提供的 Dockerfile 文件相对于比较简单，而实现项目中最觉用的是对SSL的支持。

因此，默认情况下你可以将证书放置 `_nginx/ssl` 目录下，并开启 `_nginx/default.conf` 相关SSL配置项即可。

最后，增加 `docker-compose.yml` 的 `ports` 节点：

```
- 443:443
```
