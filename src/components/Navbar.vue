<template>
    <div class="bg-black-900 fixed top-0 z-50 w-screen">
        <div class="relative flex h-16 items-center">
            <div class="mx-auto">
                <img src="../icons/logo.svg" alt="" class="h-8" />
            </div>
            <div class="absolute right-0 top-5 flex items-center">
                <div class="relative mr-3">
                    <span
                        class="bg-blueish absolute -top-2 -right-1.5 rounded-full px-1.5 text-xs font-semibold leading-5"
                    >
                        2
                    </span>
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
                            stroke-width="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                    </svg>
                </div>
                <div class="relative mr-3">
                    <span
                        class="absolute -top-2 -right-1.5 rounded-full bg-red-500 px-1.5 text-xs font-semibold leading-5"
                    >
                        2
                    </span>
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
                            stroke-width="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default { name: 'Navbar' }
</script>

<style></style>
