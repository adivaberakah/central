ARG tag
FROM prismagraphql/prisma:$tag
WORKDIR /app
COPY ./prerun_hook.sh /app/prerun_hook.sh
CMD /app/start.sh