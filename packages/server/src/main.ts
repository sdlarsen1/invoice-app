import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

  console.log(
    '\x1b[33m%s\x1b[0m',
    `\n.--------------------------------------------------------------------------.\n` +
      `|                                                                          |\n` +
      `|        __..,,-----l"|-.                                                  |\n` +
      `|    __/"__  |----""  |  i--voo..,,__                                      |\n` +
      `| .-'=|:|/\|-------o.,,,---. Y88888888o,,_                                  |\n` +
      `|_+=:_|_|__|_|   ___|__|___-|  """"\`\`\`\`"""\`----------.........___          |\n` +
      `/__============:' "" |==|__\===========(=>=+    |           ,_, .-"\`--..._  |\n` +
      `|  ;="|"|  |"| \`.____|__|__/===========(=>=+----+===-|---------<---------_=-\n` +
      `| | ==|:|\/| |   | o|.-'__,-|   .'  _______|o  \`----'|        __\ __,.-'"    |\n` +
      `|  "\`--""\`--"'"""\`.-+------'" .'  _L___,,...-----------"""""""   "         |\n` +
      `|                  \`------""""""""                                         |\n` +
      `|                                                                          |\n` +
      `.\---------------------HAMMER-HEAD EXITING HANGAR---------------------------'\n`,
  );
  await app.listen(3000);
  console.log(
    '\x1b[34m%s\x1b[0m',
    `                   running on: ${await app.getUrl()}`,
  );
}

bootstrap();
