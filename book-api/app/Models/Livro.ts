import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Livro extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public titulo: string;

  @column()
  public autor: string;

  @column()
  public editora: string;

  @column()
  public ano: DateTime;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
