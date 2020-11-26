import Nullstack from 'nullstack';

class BaseInput extends Nullstack {
  
  parse({event, onchange}) {
    const value = event.target.value.replace(/\D/g,'');
    const documentType = value.length > 11 ? 'CNPJ' : 'CPF';
    onchange({value, documentType});
  }

  maskCpf({value}) {
    const v = value.replace(/\D/g, '');
    if(v.length > 9) {
      return `${v.slice(0,3)}.${v.slice(3,6)}.${v.slice(6,9)}-${v.slice(9,11)}`;
    } 
    if(v.length > 6) {
      return `${v.slice(0,3)}.${v.slice(3,6)}.${v.slice(6,9)}`;
    }
    if(v.length > 3) {
      return `${v.slice(0,3)}.${v.slice(3,6)}`;
    }
    return v;
  }

  maskCnpj({value}) {
    const v = value.replace(/\D/g,'');
    if(v.length > 11) {
      return `${v.slice(0,2)}.${v.slice(2,5)}.${v.slice(5,8)}/${v.slice(8,12)}-${v.slice(12,14)}`;
    } else if(v.length > 8) {
      return `${v.slice(0,2)}.${v.slice(2,5)}.${v.slice(5,8)}/${v.slice(8,12)}`;
    } else if(v.length > 5) {
      return `${v.slice(0,2)}.${v.slice(2,5)}.${v.slice(5,8)}`;
    } else if(v.length > 3) {
      return `${v.slice(0,2)}.${v.slice(2,5)}`;
    }
  }

  maskCpfCnpj({value}) {
    const v = value.replace(/\D/g,'');
    return (v.length > 11) ? this.maskCnpj(v) : this.maskCpf(v);
  }

  dataset(context) {
    return Object.keys(context).filter((key) => {
      return key.startsWith('data');
    }).reduce((accumulator, key) => {
      accumulator[key] = context[key];
      return accumulator;
    }, {});
  }

  render({value, name, placeholder, class: klass, id, mask}) {
    return (
      <input
        type="tel"
        name={name}
        value={this[mask](value)}
        placeholder={placeholder}
        maxlength={18}
        oninput={this.parse}
        class={klass}
        id={id}
        {...this.dataset()}
      />
    )
  }

}

export default BaseInput;