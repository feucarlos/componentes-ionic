import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
  name: "filtro",
})
export class FiltroPipe implements PipeTransform {
  transform(arr: any[], texto: string = "", columna: string = "title"): any {
    if (texto === "") {
      return arr
    }

    if (!arr) {
      return arr
    }

    texto = texto.toLowerCase()

    return arr.filter((item) => item[columna].toLowerCase().includes(texto))

    // console.log(arr)
    // console.log(texto)

    return null
  }
}
