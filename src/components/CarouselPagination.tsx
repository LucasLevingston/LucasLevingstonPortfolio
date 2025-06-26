import type React from 'react';

import { Pagination, PaginationContent } from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import {
	ChevronsLeft,
	ChevronsRight,
	ChevronLeft,
	ChevronRight,
} from 'lucide-react';
import type { CarouselApi } from '@/components/ui/carousel';

interface CarouselPaginationProps {
	currentImage: number;
	setCurrentImage: (index: number) => void;
	api: CarouselApi;
	images: any[];
}

const CarouselPagination: React.FC<CarouselPaginationProps> = ({
	currentImage,
	setCurrentImage,
	api,
	images,
}) => {
	const paginationButtonClassName =
		'border-2 border-mainBorder dark:border-main-border-dark transition-all hover:bg-lightMainColor dark:hover:bg-light-main-color-dark text-foreground font-medium';

	const activePaginationButtonClassName =
		'bg-mainColor hover:bg-main-color-dark text-white border-mainColor dark:border-mainColor';

	return (
		<Pagination>
			<PaginationContent>
				<Button
					variant="outline"
					size="sm"
					className={`hidden sm:inline-flex ${paginationButtonClassName}`}
					disabled={currentImage === 0}
					onClick={() => {
						setCurrentImage(0);
						api?.scrollTo(0);
					}}
				>
					<ChevronsLeft className="h-4 w-4" />
				</Button>

				<Button
					variant="outline"
					size="sm"
					className={paginationButtonClassName}
					disabled={currentImage === 0}
					onClick={() => {
						setCurrentImage(currentImage - 1);
						api?.scrollPrev();
					}}
				>
					<ChevronLeft className="h-4 w-4" />
				</Button>

				{/* Previous page number */}
				{currentImage > 0 && (
					<Button
						variant="outline"
						size="sm"
						className={paginationButtonClassName}
						onClick={() => {
							setCurrentImage(currentImage - 1);
							api?.scrollTo(currentImage - 1);
						}}
					>
						{currentImage}
					</Button>
				)}

				{/* Current page number (active) */}
				<Button
					variant="outline"
					size="sm"
					className={`${paginationButtonClassName} ${activePaginationButtonClassName}`}
					disabled
				>
					{currentImage + 1}
				</Button>

				{/* Next page number */}
				{currentImage < images.length - 1 && (
					<Button
						variant="outline"
						size="sm"
						className={paginationButtonClassName}
						onClick={() => {
							setCurrentImage(currentImage + 1);
							api?.scrollTo(currentImage + 1);
						}}
					>
						{currentImage + 2}
					</Button>
				)}

				<Button
					variant="outline"
					size="sm"
					className={paginationButtonClassName}
					disabled={currentImage === images.length - 1}
					onClick={() => {
						setCurrentImage(currentImage + 1);
						api?.scrollNext();
					}}
				>
					<ChevronRight className="h-4 w-4" />
				</Button>

				<Button
					variant="outline"
					size="sm"
					className={`hidden sm:inline-flex ${paginationButtonClassName}`}
					disabled={currentImage === images.length - 1}
					onClick={() => {
						setCurrentImage(images.length - 1);
						api?.scrollTo(images.length - 1);
					}}
				>
					<ChevronsRight className="h-4 w-4" />
				</Button>
			</PaginationContent>
		</Pagination>
	);
};

export default CarouselPagination;
