import { createGlobalStyle } from "styled-components";

export const SlickSliderStyles = createGlobalStyle`
    .slick-slider {
        .slick-dots {
            bottom: 20px;

            li button:before {
                font-size: 10px;
            }
        }

        .slick-prev {
            left: 15px;
        }

        .slick-next {
            right: 20px;
        }

        .slick-next,
        .slick-prev {
            z-index: 2;

            &:before {
                color: ${({ theme }) => theme.product.sliderArrows};
                font-size: 30px;
            }
        }

        &.products-slick {
            .slick-list {
                padding-bottom: 30px;
                padding-top: 20px;
            }

            .slick-prev {
                left: 0px;
            }

            .slick-next {
                right: 30px;
            }

            .slick-next,
            .slick-prev {
                z-index: 2;

                &:before {
                    color: ${({ theme }) => theme.productsSection.sliderArrows};
                    font-size: 50px;
                }
            }
        }
    }
`;
