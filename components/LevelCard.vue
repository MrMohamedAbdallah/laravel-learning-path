<script setup>
import { useStorage } from '@vueuse/core';


const props = defineProps(['level', 'storageKey']);

const linksKeys = ['docs', 'videos', 'articles', 'courses', 'tests'];


const progress = useStorage(props.storageKey, []);

</script>

<template>
    <div class="bg-white rounded shadow-lg relative">
      <div class="sticky top-0 p-4 bg-white border-b">
        <h1 class="text-2xl font-bold">{{ level.title }}</h1>
        <p class="mt-2 text-sm text-slate-800">{{ level.subtitle }}</p>
      </div>
      <table class="bg-white text-left w-full">
        <thead>
          <tr>
            <th class="border border-t-0 py-2 px-4"></th>
            <th class="border border-t-0 py-2 px-4"></th>
            <th class="border border-t-0 py-2 px-4">Topic</th>
            <th class="border border-t-0 py-2 px-4">Resources</th>
          </tr>
        </thead>
        <tbody class="text-sm">
          <tr v-for="(topic, i) in level.data" class="hover:bg-slate-100">
            <td class="border py-2 px-4">
              {{ i + 1}}
            </td>
            <td class="border py-2 px-4">
              <input 
                type="checkbox"
                :value="topic.id"
                v-model="progress"
                class="w-4 h-4 cursor-pointer accent-indigo-500"
              />
            </td>
            <td class="border py-2 px-4">{{ topic.topic }}</td>
            <td class="border py-2 px-4">
              <template v-for="linksKey in linksKeys">
                <template v-if="topic[linksKey] && topic[linksKey]">
                  <h4 class="text-sm font-bold mb-2 capitalize">{{ linksKey }}</h4>
                  <ul class="ml-2">
                    <li v-for="links in topic[linksKey]" class="list-disc my-2">
                      <a class="font-semibold underline text-blue-600" :href="links.url" target="_blank">{{
                          links.title
                      }}</a>
                    </li>
                  </ul>
                </template>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="p-4 border border-t-0" v-if="$slots.footer">
        <slot name="footer" />
      </div>
    </div>
</template>
