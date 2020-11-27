
# Nullstack CPF CNPJ Input

Simple input that converts user formatted input into a numerical string and the other way around.

## Install

```bash
npm install --save nullstack-cpf-cnpj-input
```

## Usage with one way binding

```jsx
import Nullstack from 'nullstack';
import {CpfCnpjInput} from 'nullstack-cpf-cnpj-input';

class Application extends Nullstack {

  documentNumber = '72823671080';

  updateDocumentNumber({value}) {
    this.documentNumber = value;
  }

  render() {
    return (
      <CpfCnpjInput name="documentNumber" value={this.documentNumber} onchange={this.updateDocumentNumber} />
    )
  }

}

export default Application;
```

## Usage with two way binding

```jsx
import Nullstack from 'nullstack';
import {CpfCnpjInput} from 'nullstack-cpf-cnpj-input';

class Application extends Nullstack {

  documentNumber = '44775999001';

  render() {
    return (
      <CpfCnpjInput bind={this.documentNumber} />
    )
  }

}

export default Application;
```

## CPF only input

```jsx
import Nullstack from 'nullstack';
import {CpfInput} from 'nullstack-cpf-cnpj-input';

class Application extends Nullstack {

  cpf = '85262835023';

  render() {
    return (
      <CpfInput bind={this.cpf} />
    )
  }

}

export default Application;
```

## CNPJ only input

```jsx
import Nullstack from 'nullstack';
import {CnpjInput} from 'nullstack-cpf-cnpj-input';

class Application extends Nullstack {

  cnpj = '68820521000129';

  render() {
    return (
      <CnpjInput bind={this.cnpj} />
    )
  }

}

export default Application;
```

## Document Type

Every component above also returns a documentType on change

Document type value will be "CPF" or "CNPJ"

```jsx
import Nullstack from 'nullstack';
import {CpfCnpjInput} from 'nullstack-cpf-cnpj-input';

class Application extends Nullstack {

  documentNumber = '18617238062';
  documentType = 'CPF';

  updateDocumentType({documentType}) {
    this.documentType = documentType;
  }

  render() {
    return (
      <CpfCnpjInput bind={this.documentNumber} onchange={this.updateDocumentType} />
    )
  }

}

export default Application;
```

## Customization

You can customize the following attributes:

- id
- class
- placeholder
- disabled
- data-*

## License

Nullstack CPF CNPJ Input is released under the [MIT License](https://opensource.org/licenses/MIT).