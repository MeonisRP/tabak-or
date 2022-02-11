<template>
    <div class="bg-black-900 fixed bottom-0 w-screen px-2">
        <div class="relative grid h-16 grid-cols-4 items-center border-t border-white">
            <div class="flex flex-col items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mb-0.5 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                <span class="text-xs">Каталог</span>
            </div>
            <div class="flex flex-col items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mb-0.5 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
                <span class="text-xs">Корзина</span>
            </div>
            <div class="flex flex-col items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mb-0.5 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                </svg>
                <span class="text-xs">Отчеты</span>
            </div>
            <div class="flex flex-col items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mb-0.5 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                </svg>
                <span class="text-xs">Профиль</span>
            </div>
        </div>
    </div>
</template>

<script>
export default { name: 'Menu' }
</script>
