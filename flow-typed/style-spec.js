// Generated code; do not edit. Edit build/generate-flow-typed-style-spec.js instead.

declare type ColorSpecification = string;

declare type FilterSpecification =
    | ['has', string]
    | ['!has', string]
    | ['==', string, string | number | boolean]
    | ['!=', string, string | number | boolean]
    | ['>', string, string | number | boolean]
    | ['>=', string, string | number | boolean]
    | ['<', string, string | number | boolean]
    | ['<=', string, string | number | boolean]
    | Array<string | FilterSpecification>; // Can't type in, !in, all, any, none -- https://github.com/facebook/flow/issues/2443

declare type TransitionSpecification = {
    duration?: number,
    delay?: number
};

// Note: doesn't capture interpolatable vs. non-interpolatable types.

declare type CameraFunctionSpecification<T> =
    | {| type: 'exponential', stops: Array<[number, T]> |}
    | {| type: 'interval',    stops: Array<[number, T]> |};

declare type SourceFunctionSpecification<T> =
    | {| type: 'exponential', stops: Array<[number, T]>, property: string, default?: T |}
    | {| type: 'interval',    stops: Array<[number, T]>, property: string, default?: T |}
    | {| type: 'categorical', stops: Array<[string | number | boolean, T]>, property: string, default?: T |}
    | {| type: 'identity', property: string, default?: T |};

declare type CompositeFunctionSpecification<T> =
    | {| type: 'exponential', stops: Array<[{zoom: number, value: number}, T]>, property: string, default?: T |}
    | {| type: 'interval',    stops: Array<[{zoom: number, value: number}, T]>, property: string, default?: T |}
    | {| type: 'categorical', stops: Array<[{zoom: number, value: string | number | boolean}, T]>, property: string, default?: T |};

declare type ExpressionFunctionSpecification = {|
    expression: mixed
|}

declare type PropertyValueSpecification<T> =
    | T
    | CameraFunctionSpecification<T>
    | ExpressionFunctionSpecification;

declare type DataDrivenPropertyValueSpecification<T> =
    | T
    | CameraFunctionSpecification<T>
    | SourceFunctionSpecification<T>
    | CompositeFunctionSpecification<T>
    | ExpressionFunctionSpecification;

declare type StyleSpecification = {|
    "version": 8,
    "name"?: string,
    "metadata"?: mixed,
    "center"?: Array<number>,
    "zoom"?: number,
    "bearing"?: number,
    "pitch"?: number,
    "light"?: LightSpecification,
    "sources": {[string]: SourceSpecification},
    "sprite"?: string,
    "glyphs"?: string,
    "transition"?: TransitionSpecification,
    "layers": Array<LayerSpecification>
|}

declare type LightSpecification = {|
    "anchor"?: PropertyValueSpecification<"map" | "viewport">,
    "position"?: PropertyValueSpecification<[number, number, number]>,
    "color"?: PropertyValueSpecification<ColorSpecification>,
    "intensity"?: PropertyValueSpecification<number>
|}

declare type TileSourceSpecification = {
    "type": "vector" | "raster",
    "url"?: string,
    "tiles"?: Array<string>,
    "bounds"?: [number, number, number, number],
    "minzoom"?: number,
    "maxzoom"?: number,
    "tileSize"?: number
}

declare type GeojsonSourceSpecification = {|
    "type": "geojson",
    "data"?: mixed,
    "maxzoom"?: number,
    "buffer"?: number,
    "tolerance"?: number,
    "cluster"?: boolean,
    "clusterRadius"?: number,
    "clusterMaxZoom"?: number
|}

declare type VideoSourceSpecification = {|
    "type": "video",
    "urls": Array<string>,
    "coordinates": [[number, number], [number, number], [number, number], [number, number]]
|}

declare type ImageSourceSpecification = {|
    "type": "image",
    "url": string,
    "coordinates": [[number, number], [number, number], [number, number], [number, number]]
|}

declare type CanvasSourceSpecification = {|
    "type": "canvas",
    "coordinates": [[number, number], [number, number], [number, number], [number, number]],
    "animate"?: boolean,
    "canvas": string
|}

declare type SourceSpecification =
    | TileSourceSpecification
    | GeojsonSourceSpecification
    | VideoSourceSpecification
    | ImageSourceSpecification
    | CanvasSourceSpecification

declare type FillLayerSpecification = {|
    "id": string,
    "type": "fill",
    "metadata"?: mixed,
    "source": string,
    "source-layer"?: string,
    "minzoom"?: number,
    "maxzoom"?: number,
    "filter"?: FilterSpecification,
    "layout"?: {|
        "fill-antialias"?: PropertyValueSpecification<boolean>,
        "fill-opacity"?: DataDrivenPropertyValueSpecification<number>,
        "fill-color"?: DataDrivenPropertyValueSpecification<ColorSpecification>,
        "fill-outline-color"?: DataDrivenPropertyValueSpecification<ColorSpecification>,
        "fill-translate"?: PropertyValueSpecification<[number, number]>,
        "fill-translate-anchor"?: PropertyValueSpecification<"map" | "viewport">,
        "fill-pattern"?: PropertyValueSpecification<string>
    |},
    "paint"?: {|
        "visibility"?: "visible" | "none"
    |}
|}

declare type LineLayerSpecification = {|
    "id": string,
    "type": "line",
    "metadata"?: mixed,
    "source": string,
    "source-layer"?: string,
    "minzoom"?: number,
    "maxzoom"?: number,
    "filter"?: FilterSpecification,
    "layout"?: {|
        "line-opacity"?: DataDrivenPropertyValueSpecification<number>,
        "line-color"?: DataDrivenPropertyValueSpecification<ColorSpecification>,
        "line-translate"?: PropertyValueSpecification<[number, number]>,
        "line-translate-anchor"?: PropertyValueSpecification<"map" | "viewport">,
        "line-width"?: DataDrivenPropertyValueSpecification<number>,
        "line-gap-width"?: DataDrivenPropertyValueSpecification<number>,
        "line-offset"?: DataDrivenPropertyValueSpecification<number>,
        "line-blur"?: DataDrivenPropertyValueSpecification<number>,
        "line-dasharray"?: PropertyValueSpecification<Array<number>>,
        "line-pattern"?: PropertyValueSpecification<string>
    |},
    "paint"?: {|
        "line-cap"?: PropertyValueSpecification<"butt" | "round" | "square">,
        "line-join"?: DataDrivenPropertyValueSpecification<"bevel" | "round" | "miter">,
        "line-miter-limit"?: PropertyValueSpecification<number>,
        "line-round-limit"?: PropertyValueSpecification<number>,
        "visibility"?: "visible" | "none"
    |}
|}

declare type SymbolLayerSpecification = {|
    "id": string,
    "type": "symbol",
    "metadata"?: mixed,
    "source": string,
    "source-layer"?: string,
    "minzoom"?: number,
    "maxzoom"?: number,
    "filter"?: FilterSpecification,
    "layout"?: {|
        "icon-opacity"?: DataDrivenPropertyValueSpecification<number>,
        "icon-color"?: DataDrivenPropertyValueSpecification<ColorSpecification>,
        "icon-halo-color"?: DataDrivenPropertyValueSpecification<ColorSpecification>,
        "icon-halo-width"?: DataDrivenPropertyValueSpecification<number>,
        "icon-halo-blur"?: DataDrivenPropertyValueSpecification<number>,
        "icon-translate"?: PropertyValueSpecification<[number, number]>,
        "icon-translate-anchor"?: PropertyValueSpecification<"map" | "viewport">,
        "text-opacity"?: DataDrivenPropertyValueSpecification<number>,
        "text-color"?: DataDrivenPropertyValueSpecification<ColorSpecification>,
        "text-halo-color"?: DataDrivenPropertyValueSpecification<ColorSpecification>,
        "text-halo-width"?: DataDrivenPropertyValueSpecification<number>,
        "text-halo-blur"?: DataDrivenPropertyValueSpecification<number>,
        "text-translate"?: PropertyValueSpecification<[number, number]>,
        "text-translate-anchor"?: PropertyValueSpecification<"map" | "viewport">
    |},
    "paint"?: {|
        "symbol-placement"?: PropertyValueSpecification<"point" | "line">,
        "symbol-spacing"?: PropertyValueSpecification<number>,
        "symbol-avoid-edges"?: PropertyValueSpecification<boolean>,
        "icon-allow-overlap"?: PropertyValueSpecification<boolean>,
        "icon-ignore-placement"?: PropertyValueSpecification<boolean>,
        "icon-optional"?: PropertyValueSpecification<boolean>,
        "icon-rotation-alignment"?: PropertyValueSpecification<"map" | "viewport" | "auto">,
        "icon-size"?: DataDrivenPropertyValueSpecification<number>,
        "icon-text-fit"?: PropertyValueSpecification<"none" | "width" | "height" | "both">,
        "icon-text-fit-padding"?: PropertyValueSpecification<[number, number, number, number]>,
        "icon-image"?: DataDrivenPropertyValueSpecification<string>,
        "icon-rotate"?: DataDrivenPropertyValueSpecification<number>,
        "icon-padding"?: PropertyValueSpecification<number>,
        "icon-keep-upright"?: PropertyValueSpecification<boolean>,
        "icon-offset"?: DataDrivenPropertyValueSpecification<[number, number]>,
        "icon-anchor"?: DataDrivenPropertyValueSpecification<"center" | "left" | "right" | "top" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right">,
        "icon-pitch-alignment"?: PropertyValueSpecification<"map" | "viewport" | "auto">,
        "text-pitch-alignment"?: PropertyValueSpecification<"map" | "viewport" | "auto">,
        "text-rotation-alignment"?: PropertyValueSpecification<"map" | "viewport" | "auto">,
        "text-field"?: DataDrivenPropertyValueSpecification<string>,
        "text-font"?: PropertyValueSpecification<Array<string>>,
        "text-size"?: DataDrivenPropertyValueSpecification<number>,
        "text-max-width"?: DataDrivenPropertyValueSpecification<number>,
        "text-line-height"?: PropertyValueSpecification<number>,
        "text-letter-spacing"?: DataDrivenPropertyValueSpecification<number>,
        "text-justify"?: DataDrivenPropertyValueSpecification<"left" | "center" | "right">,
        "text-anchor"?: DataDrivenPropertyValueSpecification<"center" | "left" | "right" | "top" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right">,
        "text-max-angle"?: PropertyValueSpecification<number>,
        "text-rotate"?: DataDrivenPropertyValueSpecification<number>,
        "text-padding"?: PropertyValueSpecification<number>,
        "text-keep-upright"?: PropertyValueSpecification<boolean>,
        "text-transform"?: DataDrivenPropertyValueSpecification<"none" | "uppercase" | "lowercase">,
        "text-offset"?: DataDrivenPropertyValueSpecification<[number, number]>,
        "text-allow-overlap"?: PropertyValueSpecification<boolean>,
        "text-ignore-placement"?: PropertyValueSpecification<boolean>,
        "text-optional"?: PropertyValueSpecification<boolean>,
        "visibility"?: "visible" | "none"
    |}
|}

declare type CircleLayerSpecification = {|
    "id": string,
    "type": "circle",
    "metadata"?: mixed,
    "source": string,
    "source-layer"?: string,
    "minzoom"?: number,
    "maxzoom"?: number,
    "filter"?: FilterSpecification,
    "layout"?: {|
        "circle-radius"?: DataDrivenPropertyValueSpecification<number>,
        "circle-color"?: DataDrivenPropertyValueSpecification<ColorSpecification>,
        "circle-blur"?: DataDrivenPropertyValueSpecification<number>,
        "circle-opacity"?: DataDrivenPropertyValueSpecification<number>,
        "circle-translate"?: PropertyValueSpecification<[number, number]>,
        "circle-translate-anchor"?: PropertyValueSpecification<"map" | "viewport">,
        "circle-pitch-scale"?: PropertyValueSpecification<"map" | "viewport">,
        "circle-pitch-alignment"?: PropertyValueSpecification<"map" | "viewport">,
        "circle-stroke-width"?: DataDrivenPropertyValueSpecification<number>,
        "circle-stroke-color"?: DataDrivenPropertyValueSpecification<ColorSpecification>,
        "circle-stroke-opacity"?: DataDrivenPropertyValueSpecification<number>
    |},
    "paint"?: {|
        "visibility"?: "visible" | "none"
    |}
|}

declare type HeatmapLayerSpecification = {|
    "id": string,
    "type": "heatmap",
    "metadata"?: mixed,
    "source": string,
    "source-layer"?: string,
    "minzoom"?: number,
    "maxzoom"?: number,
    "filter"?: FilterSpecification,
    "layout"?: {|
        "heatmap-radius"?: PropertyValueSpecification<number>,
        "heatmap-weight"?: DataDrivenPropertyValueSpecification<number>,
        "heatmap-intensity"?: PropertyValueSpecification<number>,
        "heatmap-color"?: PropertyValueSpecification<ColorSpecification>,
        "heatmap-opacity"?: PropertyValueSpecification<number>
    |},
    "paint"?: {|
        "visibility"?: "visible" | "none"
    |}
|}

declare type FillExtrusionLayerSpecification = {|
    "id": string,
    "type": "fill-extrusion",
    "metadata"?: mixed,
    "source": string,
    "source-layer"?: string,
    "minzoom"?: number,
    "maxzoom"?: number,
    "filter"?: FilterSpecification,
    "layout"?: {|
        "fill-extrusion-opacity"?: PropertyValueSpecification<number>,
        "fill-extrusion-color"?: DataDrivenPropertyValueSpecification<ColorSpecification>,
        "fill-extrusion-translate"?: PropertyValueSpecification<[number, number]>,
        "fill-extrusion-translate-anchor"?: PropertyValueSpecification<"map" | "viewport">,
        "fill-extrusion-pattern"?: PropertyValueSpecification<string>,
        "fill-extrusion-height"?: DataDrivenPropertyValueSpecification<number>,
        "fill-extrusion-base"?: DataDrivenPropertyValueSpecification<number>
    |},
    "paint"?: {|
        "visibility"?: "visible" | "none"
    |}
|}

declare type RasterLayerSpecification = {|
    "id": string,
    "type": "raster",
    "metadata"?: mixed,
    "source": string,
    "source-layer"?: string,
    "minzoom"?: number,
    "maxzoom"?: number,
    "filter"?: FilterSpecification,
    "layout"?: {|
        "raster-opacity"?: PropertyValueSpecification<number>,
        "raster-hue-rotate"?: PropertyValueSpecification<number>,
        "raster-brightness-min"?: PropertyValueSpecification<number>,
        "raster-brightness-max"?: PropertyValueSpecification<number>,
        "raster-saturation"?: PropertyValueSpecification<number>,
        "raster-contrast"?: PropertyValueSpecification<number>,
        "raster-fade-duration"?: PropertyValueSpecification<number>
    |},
    "paint"?: {|
        "visibility"?: "visible" | "none"
    |}
|}

declare type BackgroundLayerSpecification = {|
    "id": string,
    "type": "background",
    "metadata"?: mixed,
    "minzoom"?: number,
    "maxzoom"?: number,
    "layout"?: {|
        "background-color"?: PropertyValueSpecification<ColorSpecification>,
        "background-pattern"?: PropertyValueSpecification<string>,
        "background-opacity"?: PropertyValueSpecification<number>
    |},
    "paint"?: {|
        "visibility"?: "visible" | "none"
    |}
|}

declare type LayerSpecification =
    | FillLayerSpecification
    | LineLayerSpecification
    | SymbolLayerSpecification
    | CircleLayerSpecification
    | HeatmapLayerSpecification
    | FillExtrusionLayerSpecification
    | RasterLayerSpecification
    | BackgroundLayerSpecification;

