import { Controller, Get, Param } from '@nestjs/common';

@Controller('fundament')
export class FundamentController {
    @Get()
    gethello(): string {
        return 'Hola mundo';
    }

    @Get('cat')
    getCat(): string {
        return 'esto es mi gato....';
    }

    @Get('dog/:id')
    getDog(@Param() params): string {
        return `Haz llamado a mi perro ${params.id}`;
    }

    @Get('buscar/:query/:page')
    getPage(@Param() params): string {
        return `Burcar: ${params.query} - Pagina: ${params.page}`;
    }

    @Get('params/:query/:page/:limit')
    getParam(@Param() params): string {
        return params;
    }

    @Get('pecific/:query/:page/:limit')
    geteSpecificParam(@Param('query') query): string {
        return query;
    }

    @Get('buscar/:query/:page/:limit/:flat')
    geteSpecificParams(@Param('query') query, 
                       @Param('page') page,
                       @Param('limit') limit,
                       @Param('flat') flat): string {
        return `Burcar: ${query} - Pagina: ${page} - limite: ${limit} - bandera: ${flat}`;
    }

}
