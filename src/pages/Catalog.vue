<template>
    <div class="relative mt-16 flex flex-col">
        <div class="bg-black-900 fixed top-16 flex w-full flex-col p-2">
            <div class="relative mb-2 flex h-8">
                <input type="search" placeholder="Поиск" class="bg-black-800 border-black-800 w-full rounded-lg" />
                <div class="bg-black-900 absolute right-4 top-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-2">
                <button class="bg-black-800 flex items-center justify-center rounded-lg py-1">
                    <img src="../icons/filter.svg" alt="" class="mr-2 h-5 w-5 object-contain" />
                    <span>Фильтр</span>
                </button>
                <button class="bg-black-800 flex items-center justify-center rounded-lg py-1">
                    <span>Сортировать</span>
                    <img src="../icons/sort.svg" alt="" class="ml-2 h-3 w-3 object-contain" />
                </button>
            </div>
        </div>
        <div class="mt-24">
            <div v-for="product in products" :key="product.id" class="text-black-200 px-2 font-light">
                <div class="border-black-600 flex justify-between border-b py-2 text-sm">
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
                                <button class="text-black-700 border-black-700 mb-3 rounded border">Блок</button>
                                <div class="flex justify-between">
                                    <button @click="product.blocks--" class="bg-black-700 rounded px-3">-</button>
                                    <span>{{ product.blocks }}</span>
                                    <button @click="product.blocks++" class="bg-black-700 rounded px-3">+</button>
                                </div>
                            </div>
                            <div class="flex flex-col justify-between">
                                <button class="border-black-700 bg-blueish mb-3 rounded border">Коробка</button>
                                <div class="flex justify-between">
                                    <button @click="product.boxes--" class="bg-blueish rounded px-3">-</button>
                                    <span>{{ product.boxes }}</span>
                                    <button @click="product.boxes++" class="bg-blueish rounded px-3">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex w-2/12 flex-col items-end">
                        <div class="mb-auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#fff"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.25"
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                />
                            </svg>
                        </div>
                        <span class="text-lg font-bold">{{ product.price }} ₽</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Catalog',
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
                },
                {
                    id: 7,
                    name: 'Жевательный табак Oden’s 10г',
                    status: 'Доступно',
                    image: require('../products/1.png'),
                    price: 400,
                    blocks: 0,
                    boxes: 0
                },
                {
                    id: 8,
                    name: 'Жевательный табак Oden’s 10г',
                    status: 'Доступно',
                    image: require('../products/1.png'),
                    price: 400,
                    blocks: 0,
                    boxes: 0
                },
                {
                    id: 9,
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
