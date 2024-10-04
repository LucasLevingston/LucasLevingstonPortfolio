import React from 'react';
import { Pagination, PaginationContent } from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import { BiLastPage, BiFirstPage } from 'react-icons/bi';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

interface CarouselPaginationProps {
	currentImage: number;
	setCurrentImage: (index: number) => void;
	api: any;
	images: any[];
}

const CarouselPagination: React.FC<CarouselPaginationProps> = ({
	currentImage,
	setCurrentImage,
	api,
	images,
}) => {
	const paginationButtonClassName =
		'border-[2px] border-mainColor transition-all hover:bg-transparent text-black font-bold dark:text-white';

	return (
		<Pagination>
			<PaginationContent>
				<Button
					className={`hidden sm:inline ${paginationButtonClassName}`}
					disabled={currentImage === 0}
					onClick={() => {
						setCurrentImage(0);
						api?.scrollTo(0);
					}}
				>
					<BiFirstPage />
				</Button>
				<Button
					className={paginationButtonClassName}
					disabled={currentImage === 0}
					onClick={() => {
						setCurrentImage(currentImage - 1);
						api?.scrollPrev();
					}}
				>
					<MdNavigateBefore />
				</Button>

				<Button
					className={paginationButtonClassName}
					disabled={currentImage === 0}
					onClick={() => {
						setCurrentImage(currentImage - 1);
						api?.scrollTo(currentImage - 1);
					}}
				>
					{currentImage}
				</Button>

				<Button
					className={`bg-transparent ${paginationButtonClassName}`}
					disabled
				>
					{currentImage + 1}
				</Button>

				<Button
					className={paginationButtonClassName}
					disabled={currentImage === images.length - 1}
					onClick={() => {
						setCurrentImage(currentImage + 1);
						api?.scrollTo(currentImage + 1);
					}}
				>
					{currentImage + 2}
				</Button>

				<Button
					className={paginationButtonClassName}
					disabled={currentImage === images.length - 1}
					onClick={() => {
						setCurrentImage(currentImage + 1);
						api?.scrollNext();
					}}
				>
					<MdNavigateNext />
				</Button>
				<Button
					className={`hidden sm:inline ${paginationButtonClassName}`}
					disabled={currentImage === images.length - 1}
					onClick={() => {
						setCurrentImage(images.length - 1);
						api?.scrollTo(images.length - 1);
					}}
				>
					<BiLastPage />
				</Button>
			</PaginationContent>
		</Pagination>
	);
};

export default CarouselPagination;
