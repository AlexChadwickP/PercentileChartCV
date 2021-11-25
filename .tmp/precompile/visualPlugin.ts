import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api";
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin;
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions;

var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];
var percentileChart5842AC5B1C5F4149ADC266E57E6D9D8A_DEBUG: IVisualPlugin = {
    name: 'percentileChart5842AC5B1C5F4149ADC266E57E6D9D8A_DEBUG',
    displayName: 'PercentileChart',
    class: 'Visual',
    apiVersion: '2.6.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }
        throw 'Visual instance not found';
    },
    
    custom: true
};
if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["percentileChart5842AC5B1C5F4149ADC266E57E6D9D8A_DEBUG"] = percentileChart5842AC5B1C5F4149ADC266E57E6D9D8A_DEBUG;
}
export default percentileChart5842AC5B1C5F4149ADC266E57E6D9D8A_DEBUG;