import inquirer from "inquirer"
import DatePrompt from "inquirer-date-prompt"

inquirer.registerPrompt("date", DatePrompt)

export async function promptNewGasto() {
    return await inquirer.prompt(newGastoPrompt)
}


const newGastoPrompt = [
    {
        type: "input",
        name: "product",
        message: "Ingrese Nombre del producto"
    },
    {
        type: "date",
        name: "fecha",
        message: "Cuando compraste el producto?",
        locale: "es-ES",
        format: { mont: "short", hour: undefined, minute: undefined }
    },
    {
        type: "number",
        name: "price",
        message: "ingrese precio del producto"

    }

]