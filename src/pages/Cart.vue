<template>
    <div class="relative mt-16 flex flex-col">
        <div class="fixed top-16 flex w-full flex-col bg-black-900 px-2">
            <div class="flex border-b pb-4 text-lg font-semibold">
                Ваш баланс: <span class="ml-1 text-green-500">1523 ₽</span>
            </div>
        </div>
        <div class="mt-12 mb-28">
            <div v-for="product in products" :key="product.id" class="px-2 font-light">
                <div class="flex justify-between border-b border-black-600 py-2 text-sm">
                    <div class="mr-2 flex w-3/12">
                        <img :src="product.image" alt="" class="h-full w-full object-contain" />
                    </div>
                    <div class="mr-2 flex w-7/12 flex-col">
                        <router-link to="/product">{{ product.name }}</router-link>
                        <div class="mb-4">
                            Наличие: <span class="text-green-600">{{ product.status }}</span>
                        </div>
                        <div class="grid grid-cols-2 gap-2">
                            <div class="flex flex-col justify-between">
                                <button class="mb-3 rounded border border-black-700 text-black-700">Блок</button>
                                <div class="flex justify-between">
                                    <button @click="product.blocks--" class="rounded bg-black-700 px-3">-</button>
                                    <span>{{ product.blocks }}</span>
                                    <button @click="product.blocks++" class="rounded bg-black-700 px-3">+</button>
                                </div>
                            </div>
                            <div class="flex flex-col justify-between">
                                <button class="mb-3 rounded border border-black-700 bg-blueish">Коробка</button>
                                <div class="flex justify-between">
                                    <button @click="product.boxes--" class="rounded bg-blueish px-3">-</button>
                                    <span>{{ product.boxes }}</span>
                                    <button @click="product.boxes++" class="rounded bg-blueish px-3">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex w-2/12 flex-col items-end">
                        <div class="mb-auto flex flex-col">
                            <div class="mb-3">
                                <svg
                                    width="20"
                                    height="19"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18.5408 1.86645C17.5543 0.662838 16.1859 0 14.6875 0C12.5802 0 11.246 1.3534 10.4979 2.48879C10.3038 2.78341 10.1386 3.07883 10 3.35682C9.86137 3.07883 9.69629 2.78341 9.50215 2.48879C8.75402 1.3534 7.41984 0 5.3125 0C3.81414 0 2.44566 0.66288 1.45918 1.86649C0.518242 3.01465 0 4.55237 0 6.19636C0 7.98589 0.649727 9.65034 2.04473 11.4344C3.29148 13.0289 5.08512 14.6724 7.16211 16.5756C7.93605 17.2849 8.73641 18.0183 9.58848 18.8199L9.61406 18.844C9.72453 18.948 9.86227 19 10 19C10.1377 19 10.2755 18.948 10.3859 18.844L10.4115 18.8199C11.2636 18.0183 12.0639 17.2849 12.838 16.5756C14.9149 14.6725 16.7085 13.0289 17.9553 11.4344C19.3503 9.65029 20 7.98589 20 6.19636C20 4.55237 19.4818 3.01465 18.5408 1.86645ZM12.0779 15.6165C11.4107 16.2278 10.724 16.857 10 17.5339C9.27602 16.8571 8.58934 16.2279 7.92203 15.6164C3.85723 11.8917 1.17188 9.43103 1.17188 6.19636C1.17188 4.85934 1.58613 3.61751 2.33836 2.69966C3.09922 1.77139 4.15543 1.26015 5.3125 1.26015C6.9191 1.26015 7.95766 2.32447 8.54594 3.21732C9.07363 4.01811 9.34898 4.82536 9.44289 5.13523C9.52145 5.39461 9.74633 5.57015 10 5.57015C10.2537 5.57015 10.4786 5.39461 10.5571 5.13523C10.651 4.82536 10.9264 4.01811 11.4541 3.21728C12.0423 2.32447 13.0809 1.26015 14.6875 1.26015C15.8446 1.26015 16.9008 1.77139 17.6616 2.69966C18.4139 3.61751 18.8281 4.85934 18.8281 6.19636C18.8281 9.43103 16.1428 11.8917 12.0779 15.6165Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <div class="mb-3">
                                <svg
                                    width="18"
                                    height="20"
                                    viewBox="0 0 18 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.5 18.3334H16.5"
                                        stroke="white"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M3.66665 6.98328H2.33333C1.875 6.98328 1.5 7.35828 1.5 7.81661V14.9999C1.5 15.4583 1.875 15.8333 2.33333 15.8333H3.66665C4.12498 15.8333 4.49998 15.4583 4.49998 14.9999V7.81661C4.49998 7.35828 4.12498 6.98328 3.66665 6.98328Z"
                                        stroke="white"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M9.66665 4.32495H8.33333C7.875 4.32495 7.5 4.69995 7.5 5.15828V14.9999C7.5 15.4583 7.875 15.8333 8.33333 15.8333H9.66665C10.125 15.8333 10.5 15.4583 10.5 14.9999V5.15828C10.5 4.69995 10.125 4.32495 9.66665 4.32495Z"
                                        stroke="white"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M15.6666 1.66663H14.3333C13.875 1.66663 13.5 2.04163 13.5 2.49996V15C13.5 15.4583 13.875 15.8333 14.3333 15.8333H15.6666C16.125 15.8333 16.5 15.4583 16.5 15V2.49996C16.5 2.04163 16.125 1.66663 15.6666 1.66663Z"
                                        stroke="white"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <span class="text-lg font-semibold">{{ product.price }} ₽</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="fixed bottom-16 z-50 h-12 w-full bg-black-900">
            <div class="mx-2 flex h-full items-center justify-start border-y border-blueish text-sm">
                <div class="flex h-full w-1/2 flex-col items-start justify-center px-1">
                    <span>2400 ₽</span>
                    <span class="text-xs text-black-700">{{ products.length }} товар(-ов)</span>
                </div>
                <router-link to="/cart" class="flex h-full w-1/2 items-center justify-center bg-blueish px-1">
                    Перейти к оформлению
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cart',
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Жевательный табак Oden’s 10г',
                    status: 'Доступно',
                    image: require('../products/1.png'),
                    price: 400,
                    blocks: 0,
                    boxes: 0
                },
                {
                    id: 2,
                    name: 'Жевательный табак Oden’s 10г',
                    status: 'Доступно',
                    image: require('../products/1.png'),
                    price: 400,
                    blocks: 0,
                    boxes: 0
                },
                {
                    id: 3,
                    name: 'Жевательный табак Oden’s 10г',
                    status: 'Доступно',
                    image: require('../products/1.png'),
                    price: 400,
                    blocks: 0,
                    boxes: 0
                },
                {
                    id: 4,
                    name: 'Жевательный табак Oden’s 10г',
                    status: 'Доступно',
                    image: require('../products/1.png'),
                    price: 400,
                    blocks: 0,
                    boxes: 0
                },
                {
                    id: 5,
                    name: 'Жевательный табак Oden’s 10г',
                    status: 'Доступно',
                    image: require('../products/1.png'),
                    price: 400,
                    blocks: 0,
                    boxes: 0
                },
                {
                    id: 6,
                    name: 'Жевательный табак Oden’s 10г',
                    status: 'Доступно',
                    image: require('../products/1.png'),
                    price: 400,
                    blocks: 0,
                    boxes: 0
                }
            ]
        }
    }
}
</script>
