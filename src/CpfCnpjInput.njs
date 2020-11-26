import Nullstack from 'nullstack';
import BaseInput from './BaseInput';

class CpfCnpjInput extends Nullstack {

  render(context) {
    return <BaseInput {...context} mask="maskCpfCnpj" />
  }

}

export default CpfCnpjInput;