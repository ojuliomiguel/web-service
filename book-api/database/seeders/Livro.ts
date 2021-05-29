import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Livro from 'App/Models/Livro'
import { DateTime } from 'luxon'

export default class LivroSeeder extends BaseSeeder {
  public async run () {
    await Livro.createMany([
      {
        titulo: 'O Hobbit',
        autor: 'J.R.R Tolkien',
        editora: 'Martins Fontes',
        ano: DateTime.fromObject({year: 1937, month: 9, day: 21})
      },

      {
        titulo: 'O Senhor dos Anéis',
        autor: 'J.R.R Tolkien',
        editora: 'Martins Fontes',
        ano: DateTime.fromObject({year: 1947, month: 12, day: 7})
      },

      {
        titulo: 'Além do Planeta Silencioso',
        autor: 'C.S Lewis',
        editora: 'Thomas Nelson Brasil',
        ano: DateTime.fromObject({year: 1950, month: 8, day: 7})
      },

    ])
  }
}
