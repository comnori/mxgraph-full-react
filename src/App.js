/* eslint-disable no-undef */
import "./grapheditor.css"
import { useEffect, useLayoutEffect, useRef } from "react";
import useScript from "./useScript";
function App() {
	const graphContainer = useRef();

	const testStatus = useScript("/mxgraphEditor/editorInit.js");
	const mxClientStatus = useScript("/mxgraph/js/mxClient.js");
	useScript("/mxgraph/js/util/mxLog.js");
	useScript("/mxgraph/js/util/mxObjectIdentity.js");
	useScript("/mxgraph/js/util/mxDictionary.js");
	useScript("/mxgraph/js/util/mxResources.js");
	useScript("/mxgraph/js/util/mxPoint.js");
	useScript("/mxgraph/js/util/mxRectangle.js");
	useScript("/mxgraph/js/util/mxEffects.js");
	useScript("/mxgraph/js/util/mxUtils.js");
	useScript("/mxgraph/js/util/mxConstants.js");
	useScript("/mxgraph/js/util/mxEventObject.js");
	useScript("/mxgraph/js/util/mxMouseEvent.js");
	useScript("/mxgraph/js/util/mxEventSource.js");
	useScript("/mxgraph/js/util/mxEvent.js");
	useScript("/mxgraph/js/util/mxXmlRequest.js");
	useScript("/mxgraph/js/util/mxClipboard.js");
	useScript("/mxgraph/js/util/mxWindow.js");
	useScript("/mxgraph/js/util/mxForm.js");
	useScript("/mxgraph/js/util/mxImage.js");
	useScript("/mxgraph/js/util/mxDivResizer.js");
	useScript("/mxgraph/js/util/mxDragSource.js");
	useScript("/mxgraph/js/util/mxToolbar.js");
	useScript("/mxgraph/js/util/mxUndoableEdit.js");
	useScript("/mxgraph/js/util/mxUndoManager.js");
	useScript("/mxgraph/js/util/mxUrlConverter.js");
	useScript("/mxgraph/js/util/mxPanningManager.js");
	useScript("/mxgraph/js/util/mxPopupMenu.js");
	useScript("/mxgraph/js/util/mxAutoSaveManager.js");
	useScript("/mxgraph/js/util/mxAnimation.js");
	useScript("/mxgraph/js/util/mxMorphing.js");
	useScript("/mxgraph/js/util/mxImageBundle.js");
	useScript("/mxgraph/js/util/mxImageExport.js");
	useScript("/mxgraph/js/util/mxAbstractCanvas2D.js");
	useScript("/mxgraph/js/util/mxXmlCanvas2D.js");
	useScript("/mxgraph/js/util/mxSvgCanvas2D.js");
	useScript("/mxgraph/js/util/mxVmlCanvas2D.js");
	useScript("/mxgraph/js/util/mxGuide.js");
	useScript("/mxgraph/js/shape/mxShape.js");
	useScript("/mxgraph/js/shape/mxStencil.js");
	useScript("/mxgraph/js/shape/mxStencilRegistry.js");
	useScript("/mxgraph/js/shape/mxMarker.js");
	useScript("/mxgraph/js/shape/mxActor.js");
	useScript("/mxgraph/js/shape/mxCloud.js");
	useScript("/mxgraph/js/shape/mxRectangleShape.js");
	useScript("/mxgraph/js/shape/mxEllipse.js");
	useScript("/mxgraph/js/shape/mxDoubleEllipse.js");
	useScript("/mxgraph/js/shape/mxRhombus.js");
	useScript("/mxgraph/js/shape/mxPolyline.js");
	useScript("/mxgraph/js/shape/mxArrow.js");
	useScript("/mxgraph/js/shape/mxArrowConnector.js");
	useScript("/mxgraph/js/shape/mxText.js");
	useScript("/mxgraph/js/shape/mxTriangle.js");
	useScript("/mxgraph/js/shape/mxHexagon.js");
	useScript("/mxgraph/js/shape/mxLine.js");
	useScript("/mxgraph/js/shape/mxImageShape.js");
	useScript("/mxgraph/js/shape/mxLabel.js");
	useScript("/mxgraph/js/shape/mxCylinder.js");
	useScript("/mxgraph/js/shape/mxConnector.js");
	useScript("/mxgraph/js/shape/mxSwimlane.js");
	useScript("/mxgraph/js/layout/mxGraphLayout.js");
	useScript("/mxgraph/js/layout/mxStackLayout.js");
	useScript("/mxgraph/js/layout/mxPartitionLayout.js");
	useScript("/mxgraph/js/layout/mxCompactTreeLayout.js");
	useScript("/mxgraph/js/layout/mxRadialTreeLayout.js");
	useScript("/mxgraph/js/layout/mxFastOrganicLayout.js");
	useScript("/mxgraph/js/layout/mxCircleLayout.js");
	useScript("/mxgraph/js/layout/mxParallelEdgeLayout.js");
	useScript("/mxgraph/js/layout/mxCompositeLayout.js");
	useScript("/mxgraph/js/layout/mxEdgeLabelLayout.js");
	useScript("/mxgraph/js/layout/hierarchical/model/mxGraphAbstractHierarchyCell.js");
	useScript("/mxgraph/js/layout/hierarchical/model/mxGraphHierarchyNode.js");
	useScript("/mxgraph/js/layout/hierarchical/model/mxGraphHierarchyEdge.js");
	useScript("/mxgraph/js/layout/hierarchical/model/mxGraphHierarchyModel.js");
	useScript("/mxgraph/js/layout/hierarchical/model/mxSwimlaneModel.js");
	useScript("/mxgraph/js/layout/hierarchical/stage/mxHierarchicalLayoutStage.js");
	useScript("/mxgraph/js/layout/hierarchical/stage/mxMedianHybridCrossingReduction.js");
	useScript("/mxgraph/js/layout/hierarchical/stage/mxMinimumCycleRemover.js");
	useScript("/mxgraph/js/layout/hierarchical/stage/mxCoordinateAssignment.js");
	useScript("/mxgraph/js/layout/hierarchical/stage/mxSwimlaneOrdering.js");
	useScript("/mxgraph/js/layout/hierarchical/mxHierarchicalLayout.js");
	useScript("/mxgraph/js/layout/hierarchical/mxSwimlaneLayout.js");
	useScript("/mxgraph/js/model/mxGraphModel.js");
	useScript("/mxgraph/js/model/mxCell.js");
	useScript("/mxgraph/js/model/mxGeometry.js");
	useScript("/mxgraph/js/model/mxCellPath.js");
	useScript("/mxgraph/js/view/mxPerimeter.js");
	useScript("/mxgraph/js/view/mxPrintPreview.js");
	useScript("/mxgraph/js/view/mxStylesheet.js");
	useScript("/mxgraph/js/view/mxCellState.js");
	useScript("/mxgraph/js/view/mxGraphSelectionModel.js");
	useScript("/mxgraph/js/view/mxCellEditor.js");
	useScript("/mxgraph/js/view/mxCellRenderer.js");
	useScript("/mxgraph/js/view/mxEdgeStyle.js");
	useScript("/mxgraph/js/view/mxStyleRegistry.js");
	useScript("/mxgraph/js/view/mxGraphView.js");
	useScript("/mxgraph/js/view/mxGraph.js");
	useScript("/mxgraph/js/view/mxCellOverlay.js");
	useScript("/mxgraph/js/view/mxOutline.js");
	useScript("/mxgraph/js/view/mxMultiplicity.js");
	useScript("/mxgraph/js/view/mxLayoutManager.js");
	useScript("/mxgraph/js/view/mxSwimlaneManager.js");
	useScript("/mxgraph/js/view/mxTemporaryCellStates.js");
	useScript("/mxgraph/js/view/mxCellStatePreview.js");
	useScript("/mxgraph/js/view/mxConnectionConstraint.js");
	useScript("/mxgraph/js/handler/mxGraphHandler.js");
	useScript("/mxgraph/js/handler/mxPanningHandler.js");
	useScript("/mxgraph/js/handler/mxPopupMenuHandler.js");
	useScript("/mxgraph/js/handler/mxCellMarker.js");
	useScript("/mxgraph/js/handler/mxSelectionCellsHandler.js");
	useScript("/mxgraph/js/handler/mxConnectionHandler.js");
	useScript("/mxgraph/js/handler/mxConstraintHandler.js");
	useScript("/mxgraph/js/handler/mxRubberband.js");
	useScript("/mxgraph/js/handler/mxHandle.js");
	useScript("/mxgraph/js/handler/mxVertexHandler.js");
	useScript("/mxgraph/js/handler/mxEdgeHandler.js");
	useScript("/mxgraph/js/handler/mxElbowEdgeHandler.js");
	useScript("/mxgraph/js/handler/mxEdgeSegmentHandler.js");
	useScript("/mxgraph/js/handler/mxKeyHandler.js");
	useScript("/mxgraph/js/handler/mxTooltipHandler.js");
	useScript("/mxgraph/js/handler/mxCellTracker.js");
	useScript("/mxgraph/js/handler/mxCellHighlight.js");
	useScript("/mxgraph/js/editor/mxDefaultKeyHandler.js");
	useScript("/mxgraph/js/editor/mxDefaultPopupMenu.js");
	useScript("/mxgraph/js/editor/mxDefaultToolbar.js");
	useScript("/mxgraph/js/editor/mxEditor.js");
	useScript("/mxgraph/js/io/mxCodecRegistry.js");
	useScript("/mxgraph/js/io/mxCodec.js");
	useScript("/mxgraph/js/io/mxObjectCodec.js");
	useScript("/mxgraph/js/io/mxCellCodec.js");
	useScript("/mxgraph/js/io/mxModelCodec.js");
	useScript("/mxgraph/js/io/mxRootChangeCodec.js");
	useScript("/mxgraph/js/io/mxChildChangeCodec.js");
	useScript("/mxgraph/js/io/mxTerminalChangeCodec.js");
	useScript("/mxgraph/js/io/mxGenericChangeCodec.js");
	useScript("/mxgraph/js/io/mxGraphCodec.js");
	useScript("/mxgraph/js/io/mxGraphViewCodec.js");
	useScript("/mxgraph/js/io/mxStylesheetCodec.js");
	useScript("/mxgraph/js/io/mxDefaultKeyHandlerCodec.js");
	useScript("/mxgraph/js/io/mxDefaultToolbarCodec.js");
	useScript("/mxgraph/js/io/mxDefaultPopupMenuCodec.js");
	useScript("/mxgraph/js/io/mxEditorCodec.js");
	useScript("/mxgraphEditor/js/Init.js");
    useScript("/mxgraphEditor/deflate/pako.min.js");
    useScript("/mxgraphEditor/deflate/base64.js");
    useScript("/mxgraphEditor/jscolor/jscolor.js");
    useScript("/mxgraphEditor/sanitizer/sanitizer.min.js");
    useScript("/mxgraphEditor/js/EditorUi.js");
    useScript("/mxgraphEditor/js/Editor.js");
    useScript("/mxgraphEditor/js/Sidebar.js");
    useScript("/mxgraphEditor/js/Graph.js");
    useScript("/mxgraphEditor/js/Format.js");
    useScript("/mxgraphEditor/js/Shapes.js");
    useScript("/mxgraphEditor/js/Actions.js");
    useScript("/mxgraphEditor/js/Menus.js");
    useScript("/mxgraphEditor/js/Toolbar.js");
    const dialogStatus = useScript("/mxgraphEditor/js/Dialogs.js");

	useLayoutEffect(() => {

		
		if(testStatus === 'ready' && mxClientStatus === 'ready' && dialogStatus === 'ready')
		{
			var editorUiInit = EditorUi.prototype.init;
	
			EditorUi.prototype.init = function () {
				editorUiInit.apply(this, arguments);
				this.actions.get("export").setEnabled(false);
	
				// Updates action states which require a backend
				if (!Editor.useLocalStorage) {
					mxUtils.post(
						OPEN_URL,
						"",
						mxUtils.bind(this, function (req) {
							var enabled = req.getStatus() !== 404;
							this.actions
								.get("open")
								.setEnabled(enabled || Graph.fileSupport);
							this.actions
								.get("import")
								.setEnabled(enabled || Graph.fileSupport);
							this.actions.get("save").setEnabled(enabled);
							this.actions.get("saveAs").setEnabled(enabled);
							this.actions.get("export").setEnabled(enabled);
						})
					);
				}
			};
	
			mxResources.loadDefaultBundle = false;
			var bundle =
				mxResources.getDefaultBundle(RESOURCE_BASE, mxLanguage) ||
				mxResources.getSpecialBundle(RESOURCE_BASE, mxLanguage);
	
			mxUtils.getAll(
				[bundle, STYLE_PATH + "/default.xml"],
				function (xhr) {
					mxResources.parse(xhr[0].getText());
	
					var themes = {};
					themes[Graph.prototype.defaultThemeName] =
						xhr[1].getDocumentElement();
	
					new EditorUi(
						new Editor(urlParams["chrome"] === "0", themes),
						graphContainer.current
					);
				},
				function () {
					document.body.innerHTML =
						'<center style="margin-top:10%;">Error loading resource files. Please check browser console.</center>';
				}
			);
	
		console.log(graphContainer, mxEvent)
		}
	}, [testStatus, mxClientStatus, dialogStatus]);

	return (
		<>
			<div ref={graphContainer}></div>
		</>
	);
}

export default App;
