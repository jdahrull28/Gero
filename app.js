const lista =[]
const AgregarRegistro = (event) => {
    event.preventDefault()
let Nombre = document.getElementById ("Nombre")    
let Direccion = document.getElementById ("Direccion")   
let Correo = document.getElementById ("Correo")   
let Error = document.getElementById ("Error")   
let Registro = {
Nombre: Nombre.Value,
Direccion: Direccion.Value,
Correo: Correo.Value,
Error: Error.Value

}
lista.push(Registro)
MostrarRegistro()
}
const MostrarRegistro = ()=> {
let salida = document.getElementById ("salida")
salida.innerHTML =``
lista.map((Registro)=>{
salida.innerHTML +=`
tr>
            <th>${Registro.Nombre} </th>
            <th>${Registro.Direccion} </th>
            <th>${Registro.Correo} </th>
            <th>${Registro.Error} </th>
            
        </tr>


`
})
}
