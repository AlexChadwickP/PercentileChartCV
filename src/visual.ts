"use strict";

import "core-js/stable";
import "./../style/visual.less";
import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstance = powerbi.VisualObjectInstance;
import DataView = powerbi.DataView;
import VisualObjectInstanceEnumerationObject = powerbi.VisualObjectInstanceEnumerationObject;
import IVisualHost = powerbi.extensibility.IVisualHost;
import * as d3 from "d3";
import { ScaleBand } from "d3";
type Selection<T extends d3.BaseType> = d3.Selection<T, any, any, any>;

export class Visual implements IVisual {
    private host: IVisualHost;
    private svg: Selection<SVGElement>;

    constructor(options: VisualConstructorOptions) {
        let margin = { top: 10, right: 30, bottom: 30, left: 60},
            width = 1000 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

        this.svg = d3.select(options.element)
            .append("svg")
            .classed("percentile_chart", true)
            .append("g");

        let x = d3.scaleBand()
            .range([0, width])        
    }

    public update(options: VisualUpdateOptions) {

    }
}