<template>
    <div class="flex flex-col">
        <div class="mt-16 mb-16">
            <div class="mb-2 border-b">
                <span class="text-lg font-semibold">Редактирование данных</span>
            </div>
            <ul>
                <li class="mb-2 text-sm">
                    <div class="pb-0.5 font-medium">Имя<span class="text-red-500">*</span></div>
                    <input
                        type="text"
                        value="Иван"
                        class="border-black-400 dark:bg-black-800 dark:border-black-800 dark:text-black-700 text-black-500 w-full rounded bg-[#F4F4F4] py-1"
                    />
                </li>
                <li class="mb-2 text-sm">
                    <div class="pb-0.5 font-medium">Фамилия<span class="text-red-500">*</span></div>
                    <input
                        type="text"
                        value="Иванов"
                        class="border-black-400 dark:bg-black-800 dark:border-black-800 dark:text-black-700 text-black-500 w-full rounded bg-[#F4F4F4] py-1"
                    />
                </li>
                <li class="mb-2 text-sm">
                    <div class="pb-0.5 font-medium">Отчество<span class="text-red-500">*</span></div>
                    <input
                        type="text"
                        value="Иванович"
                        class="border-black-400 dark:bg-black-800 dark:border-black-800 dark:text-black-700 text-black-500 w-full rounded bg-[#F4F4F4] py-1"
                    />
                </li>
                <li class="mb-2 text-sm">
                    <div class="pb-0.5 font-medium">Телефон<span class="text-red-500">*</span></div>
                    <input
                        type="text"
                        value="89657458587"
                        class="border-black-400 dark:bg-black-800 dark:border-black-800 dark:text-black-700 text-black-500 w-full rounded bg-[#F4F4F4] py-1"
                    />
                </li>
                <li class="mb-2 text-sm">
                    <div class="pb-0.5 font-medium">Почта<span class="text-red-500">*</span></div>
                    <input
                        type="text"
                        value="ivanIvanovich1@gmai.com"
                        class="border-black-400 dark:bg-black-800 dark:border-black-800 dark:text-black-700 text-black-500 w-full rounded bg-[#F4F4F4] py-1"
                    />
                </li>
                <li class="mb-2 text-sm">
                    <div class="pb-0.5 font-medium">Адрес<span class="text-red-500">*</span></div>
                    <input
                        type="text"
                        value="город Нижний Новгород, ул.Родионова, 18А "
                        class="border-black-400 dark:bg-black-800 dark:border-black-800 dark:text-black-700 text-black-500 mb-2 w-full rounded bg-[#F4F4F4] py-1"
                    />
                    <input
                        type="text"
                        value="Добавить"
                        class="border-black-400 dark:bg-black-800 dark:border-black-800 dark:text-black-700 text-black-500 mb-2 w-full rounded bg-[#F4F4F4] py-1"
                    />
                    <input
                        type="text"
                        value="Добавить"
                        class="border-black-400 dark:bg-black-800 dark:border-black-800 dark:text-black-700 text-black-500 mb-2 w-full rounded bg-[#F4F4F4] py-1"
                    />
                </li>
            </ul>
            <div class="flex h-28 justify-center p-10">
                <a href="/checkout" class="w-3/4">
                    <button class="dark:bg-blueish bg-black-900 h-full w-full rounded text-white">Сохранить</button>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfileEdit',
    data() {
        return {}
    }
}
</script>
