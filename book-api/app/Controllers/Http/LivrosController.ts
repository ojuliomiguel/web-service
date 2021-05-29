import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Livro from 'App/Models/Livro'

export default class LivrosController {

    public async index(ctx: HttpContextContract) {

        if (ctx.params.id) {
            const livro = await Livro.find(ctx.params.id)

           return ctx.response.send(livro)

        }
        
        const livros=  await Livro.all(); 

        ctx.response.send(livros)
    }

    public async store(ctx: HttpContextContract) {

        const livro = await Livro.create(ctx.request.body())
        
        console.log(livro.$isPersisted)

        ctx.response.send({message: 'livro cadastrado com sucesso!'})
    }

    public async update(ctx: HttpContextContract) {
        const livro = await Livro.findOrFail(ctx.params.id)

        livro.merge(ctx.request.body()).save()

        ctx.response.send({message: 'livro atualizado com sucesso!'})
    }

    public async delete(ctx: HttpContextContract) {
        const livro = await Livro.findOrFail(ctx.params.id)

        livro.delete()

        ctx.response.send({message: 'livro deletado com sucesso!'})
    }
}
