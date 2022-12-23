<script setup>
import data from '~/static/json/data.json';
</script>

<template>
  <main class="max-w-7xl px-4 mx-auto py-20">
    <div class="text-center mb-4">
      <h1 class="text-4xl font-bold mb-4">Laravel Learning Path</h1>
      <p class="my-1 text-slate-800">This repository contains the <strong>ordered</strong> list of Laravel
        topics to learn, step-by-step, with related links.</p>
      <p class="my-1 text-slate-800">
        This project is based on
        <a 
          href="https://github.com/LaravelDaily/Laravel-Roadmap-Learning-Path"
          target="_blank"
          class="font-bold text-indigo-500 underline"
        >
          that repo
        </a>
         which created by
         <a 
          href="https://twitter.com/PovilasKorop"
          target="_blank"
          class="font-bold text-indigo-500 underline"
        >
          Povilas Korop
        </a>.
      </p>
      <p class="text-sm text-slate-500">Your progress is saved locally on your machine.</p>
    </div>
    <LevelCard :level="data.beginner" class="mb-10">
      <template #footer>
        <h3 class="text-xl font-bold">Beginner Demo-Project: Personal Blog</h3>
        <p class="text-sm my-1 text-slate-800">
          To achieve this Beginner level, you would need to practice by creating something like
          <a class="font-semibold underline text-blue-600" target="_blank"
            href="https://github.com/LaravelDaily/Laravel-Roadmap-Beginner-Challenge">
            this personal blog project
          </a>.
        </p>
        <p class="text-sm my-1 text-slate-800">
          Inside of the repository above, you will find all the details of the task, with a few example solutions.
        </p>
      </template>
    </LevelCard>
    <LevelCard :level="data.advancedBeginner" class="mb-10">
      <template #footer>
        <h3 class="text-xl font-bold">Advanced Beginner Demo-Project: Simple CRM</h3>
        <p class="text-sm my-1 text-slate-800">
          To achieve this Advanced Beginner level, you would need to practice by creating something like
          <a class="font-semibold underline text-blue-600" target="_blank"
            href="https://github.com/LaravelDaily/Laravel-Roadmap-Advanced-Beginner-Challenge">
            this simple CRM project
          </a>.
        </p>
        <p class="text-sm my-1 text-slate-800">
          Inside of the repository above, you will find all the details of the task, with an example solution.
        </p>
      </template>
    </LevelCard>
    <LevelCard :level="data.mid" class="mb-10"></LevelCard>
    <LevelCard :level="data.senior" class="mb-10"></LevelCard>
  </main>
</template>
