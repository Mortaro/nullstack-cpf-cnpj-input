import Nullstack from 'nullstack';
import BaseInput from './BaseInput';

class CnpjInput extends Nullstack {

  render(context) {
    return <BaseInput {...context} mask="maskCnpj" />
  }

}

export default CnpjInput;