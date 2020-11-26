import Nullstack from 'nullstack';
import BaseInput from './BaseInput';

class CpfInput extends Nullstack {

  render(context) {
    return <BaseInput {...context} mask="maskCpf" />
  }

}

export default CpfInput;