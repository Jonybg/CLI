import { get, save } from "./fileMethods.js"
import inquierer from "inquirer"
import { promptNewGasto } from "./userPrompts.js"


const main = async () => {
    let run = true

    while (run) {
        const action = await inquierer.prompt([
            {
                type: "list",
                name: "chosen",
                message: "Elija por favor:",
                choices: [
                    { value: 1, name: "Obtener todos mis gatos" },
                    { value: 2, name: "Crear nuevo Gasto" },
                    { value: 99, name: "Salir" }
                ]
            }
        ])

        switch (action.chosen) {
            case 1:
                await getAllGastos();
                break
            case 2:
                await createNewGasto();
                break
            case 99:
                run = false;
                break

            default:
                run = false;
                break;
        }
    }

    console.log("Adios muchas gracias por utilizar app de gastos")

}



async function createNewGasto() {
    console.log("Agregando nuevo gasto...")
    const newGastoData = await promptNewGasto()
    console.log("creando:", newGastoData)
    const currentGastos = await get("gastos");
    currentGastos.push(newGastoData)
    await save("gastos", currentGastos)

}

async function getAllGastos() {
    const currentGastos = await get("gastos")
    console.log(currentGastos
    )
}

main()