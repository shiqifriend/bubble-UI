import Button from './src/BrainButton.vue';
// import type { App } from 'vue';
// Button.install=function(app:App){
//     app.component(Button.name,Button)
// }
import { withInstall } from '@bubble-ui/utils';

export const BrainButton = withInstall(Button);
export default BrainButton;
