import type React from 'react';

import { useState, useRef } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ZoomIn, ZoomOut, RotateCw, Download } from 'lucide-react';

interface ImageViewerProps {
	src: string;
	alt: string;
	children: React.ReactNode;
}

export function ImageViewer({ src, alt, children }: ImageViewerProps) {
	const [zoom, setZoom] = useState(1);
	const [rotation, setRotation] = useState(0);
	const [isOpen, setIsOpen] = useState(false);

	const [pan, setPan] = useState({ x: 0, y: 0 });
	const [isDragging, setIsDragging] = useState(false);
	const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

	const handleZoomIn = () => {
		setZoom((prev) => Math.min(prev + 0.25, 3));
	};

	const handleZoomOut = () => {
		setZoom((prev) => Math.max(prev - 0.25, 0.5));
	};

	const handleRotate = () => {
		setRotation((prev) => prev + 90);
	};

	const handleDownload = () => {
		const link = document.createElement('a');
		link.href = src;
		link.download = alt || 'image';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const handleMouseDown = (e: React.MouseEvent) => {
		if (zoom > 1) {
			setIsDragging(true);
			setDragStart({
				x: e.clientX - pan.x,
				y: e.clientY - pan.y,
			});
		}
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		if (isDragging && zoom > 1) {
			setPan({
				x: e.clientX - dragStart.x,
				y: e.clientY - dragStart.y,
			});
		}
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const resetTransforms = () => {
		setZoom(1);
		setRotation(0);
		setPan({ x: 0, y: 0 });
	};

	const imageRef = useRef<HTMLImageElement>(null);

	const handleWheel = (e: React.WheelEvent) => {
		e.preventDefault();
		const delta = e.deltaY > 0 ? -0.1 : 0.1;
		setZoom((prev) => Math.max(0.5, Math.min(3, prev + delta)));
	};

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<div className="cursor-pointer transition-opacity hover:opacity-80">
					{children}
				</div>
			</DialogTrigger>
			<DialogContent className="max-h-[95vh] max-w-[95vw] border-mainBorder bg-black/95 p-0 dark:border-main-border-dark">
				<div className="relative flex h-full w-full items-center justify-center">
					{/* Controls */}
					<div className="absolute right-4 top-4 z-50 flex gap-2">
						<Button
							variant="outline"
							size="sm"
							onClick={handleZoomOut}
							disabled={zoom <= 0.5}
							className="border-mainBorder bg-black/50 text-white hover:bg-lightMainColor dark:hover:bg-light-main-color-dark"
						>
							<ZoomOut className="h-4 w-4" />
						</Button>
						<Button
							variant="outline"
							size="sm"
							onClick={handleZoomIn}
							disabled={zoom >= 3}
							className="border-mainBorder bg-black/50 text-white hover:bg-lightMainColor dark:hover:bg-light-main-color-dark"
						>
							<ZoomIn className="h-4 w-4" />
						</Button>
						<Button
							variant="outline"
							size="sm"
							onClick={handleRotate}
							className="border-mainBorder bg-black/50 text-white hover:bg-lightMainColor dark:hover:bg-light-main-color-dark"
						>
							<RotateCw className="h-4 w-4" />
						</Button>
						<Button
							variant="outline"
							size="sm"
							onClick={handleDownload}
							className="border-mainBorder bg-black/50 text-white hover:bg-lightMainColor dark:hover:bg-light-main-color-dark"
						>
							<Download className="h-4 w-4" />
						</Button>
					</div>

					{/* Zoom indicator */}
					<div className="absolute left-4 top-4 z-50">
						<div className="rounded-md bg-black/50 px-3 py-1 text-sm font-medium text-white">
							{Math.round(zoom * 100)}%
						</div>
					</div>

					{/* Image container */}
					<div className="flex h-full w-full items-center justify-center overflow-auto p-4">
						<img
							ref={imageRef}
							src={src || '/placeholder.svg'}
							alt={alt}
							className="max-w-none select-none transition-transform duration-200 ease-in-out"
							style={{
								transform: `scale(${zoom}) rotate(${rotation}deg) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
								cursor:
									zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
							}}
							onMouseDown={handleMouseDown}
							onMouseMove={handleMouseMove}
							onMouseUp={handleMouseUp}
							onMouseLeave={handleMouseUp}
							onWheel={handleWheel}
							onClick={resetTransforms}
							onDoubleClick={handleZoomIn}
							draggable={false}
						/>
					</div>

					{/* Instructions */}
					<div className="absolute bottom-4 left-1/2 z-50 -translate-x-1/2 transform">
						<div className="rounded-md bg-black/50 px-4 py-2 text-center text-xs text-white">
							<p>
								Clique para resetar • Duplo clique para zoom • Arraste para
								mover • Scroll para zoom
							</p>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
