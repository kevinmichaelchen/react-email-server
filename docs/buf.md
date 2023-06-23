We rely on Buf for protobuf hosting, documentation, and SDK management.

All we do as project maintainers is create protobufs and push them up to Buf's
Schema Registry.

From there, any client (in a growing list of supported programming languages)
can declare a dependency on our protos.

https://buf.build/kevinmichaelchen/react-email-server/assets/main

```shell
npm config set @buf:registry  https://buf.build/gen/npm/v1/

npm install \
  @buf/kevinmichaelchen_react-email-server.bufbuild_connect-es@latest \
  @buf/kevinmichaelchen_react-email-server.bufbuild_es@latest
```