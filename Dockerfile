FROM registry.access.redhat.com/ubi9/nginx-122:1-45 AS base
USER 0

RUN dnf module install nodejs:20/minimal -y
RUN dnf install git -y
RUN npm i pnpm --global

WORKDIR /app
COPY ./web/pnpm-lock.yaml .
COPY ./web/package*.json .
# RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store pnpm fetch --frozen-lockfile
# RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store pnpm install --frozen-lockfile --prod
RUN pnpm i
RUN echo here
COPY ./web ./
RUN pnpm build

ADD ./docker_entrypoint.sh /usr/local/bin/docker_entrypoint.sh
RUN chmod a+x /usr/local/bin/docker_entrypoint.sh
CMD nginx -g "daemon off;"