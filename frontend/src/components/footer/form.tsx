function Form() {
    return (
    <div className="footerForm">
        <form action="">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre"/>
            <label htmlFor="correo">Correo</label>
            <input type="text" name="correo"/>
            <label htmlFor="celular">Celular</label>
            <input type="text" name="celular" className="Celular"/>
            <label htmlFor="detalle">Consulta</label>
            <textarea name="detalle" id=""></textarea>
            <button type="submit">Enviar</button>
        </form>
    </div>
    )
}

export default Form