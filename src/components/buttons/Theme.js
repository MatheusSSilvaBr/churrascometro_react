function Theme(){
  return(
    <div className="theme-container"><label id="label-theme-text" htmlFor="input-theme">Tema Escuro</label>
      <label className="switch">
          <input type="checkbox" id="input-theme" defaultChecked="checked"/>
          <span className="slider"></span>
      </label>
    </div>
  )
}

export default Theme;