import * as adobeXd from "./skills/adobe-xd.svg";
import adobeaudition from "./skills/adobeaudition.svg";
import afterEffects from "./skills/after-effects.svg";
import angular from "./skills/angular.svg";
import aws from "./skills/aws.svg";
import azure from "./skills/azure.svg";
import blender from "./skills/blender.svg";
import bootstrap from "./skills/bootstrap.svg";
import bulma from "./skills/bulma.svg";
import c from "./skills/c.svg";
import canva from "./skills/canva.svg";
import capacitorjs from "./skills/capacitorjs.svg";
import coffeescript from "./skills/coffeescript.svg";
import cplusplus from "./skills/cplusplus.svg";
import csharp from "./skills/csharp.svg";
import css from "./skills/css.svg";
import dart from "./skills/dart.svg";
import deno from "./skills/deno.svg";
import django from "./skills/django.svg";
import docker from "./skills/docker.svg";
import fastify from "./skills/fastify.svg";
import figma from "./skills/figma.svg";
import firebase from "./skills/firebase.svg";
import flutter from "./skills/flutter.svg";
import gcp from "./skills/gcp.svg";
import gimp from "./skills/gimp.svg";
import git from "./skills/git.svg";
import go from "./skills/go.svg";
import graphql from "./skills/graphql.svg";
import haxe from "./skills/haxe.svg";
import html from "./skills/html.svg";
import illustrator from "./skills/illustrator.svg";
import ionic from "./skills/ionic.svg";
import java from "./skills/java.svg";
import javascript from "./skills/javascript.svg";
import julia from "./skills/julia.svg";
import kotlin from "./skills/kotlin.svg";
import lightroom from "./skills/lightroom.svg";
import markdown from "./skills/markdown.svg";
import materialui from "./skills/materialui.svg";
import matlab from "./skills/matlab.svg";
import memsql from "./skills/memsql.svg";
import microsoftoffice from "./skills/microsoftoffice.svg";
import mongoDB from "./skills/mongoDB.svg";
import mysql from "./skills/mysql.svg";
import nextJS from "./skills/nextJS.svg";
import nginx from "./skills/nginx.svg";
import numpy from "./skills/numpy.svg";
import nuxtJS from "./skills/nuxtJS.svg";
import opencv from "./skills/opencv.svg";
import photoshop from "./skills/photoshop.svg";
import php from "./skills/php.svg";
import picsart from "./skills/picsart.svg";
import postgresql from "./skills/postgresql.svg";
import premierepro from "./skills/premierepro.svg";
import python from "./skills/python.svg";
import pytorch from "./skills/pytorch.svg";
import react from "./skills/react.svg";
import ruby from "./skills/ruby.svg";
import selenium from "./skills/selenium.svg";
import sketch from "./skills/sketch.svg";
import strapi from "./skills/strapi.svg";
import svelte from "./skills/svelte.svg";
import swift from "./skills/swift.svg";
import tailwind from "./skills/tailwind.svg";
import tensorflow from "./skills/tensorflow.svg";
import typescript from "./skills/typescript.svg";
import unity from "./skills/unity.svg";
import vitejs from "./skills/vitejs.svg";
import vue from "./skills/vue.svg";
import vuetifyjs from "./skills/vuetifyjs.svg";
import webix from "./skills/webix.svg";
import wolframalpha from "./skills/wolframalpha.svg";
import wordpress from "./skills/wordpress.svg";
import flask from './skills/flask.svg';
import laravel from './skills/laravel.svg'
import fastapi from './skills/fastapi.svg'
import restapi from './skills/api.svg'
import datascience from './skills/datascience.svg'
import redis from './skills/redis.svg'
import elixir from './skills/elixir.svg'
import saas from './skills/cloud.svg'
import jenkins from './skills/jenkins.svg'
import phoenix from './skills/phoenix.svg'
import nodejs from './skills/node.svg'
import microservices from './skills/microservices.svg'

const skillIcons = {
  microservices,
  nodejs,
  phoenix,
  jenkins,
  saas,
  elixir,
  redis,
  datascience,
  fastapi,
  restapi,
  laravel,
  flask,
  gcp,
  html,
  photoshop,
  docker,
  illustrator,
  "adobe xd": adobeXd,
  "after effects": afterEffects,
  css,
  angular,
  javascript,
  "next js": nextJS,
  "nuxt js": nuxtJS,
  react,
  "react native": react,
  "reactjs": react,
  svelte,
  typescript,
  vue,
  bootstrap,
  bulma,
  capacitorjs,
  coffeescript,
  memsql,
  mongodb: mongoDB,
  mysql,
  postgresql,
  tailwind,
  vitejs,
  vuetifyjs,
  c,
  "c++": cplusplus,
  "c#": csharp,
  dart,
  go,
  java,
  kotlin,
  julia,
  matlab,
  php,
  python,
  ruby,
  swift,
  "adobe audition": adobeaudition,
  aws,
  deno,
  django,
  "django rest framework":django,
  firebase,
  gimp,
  git,
  graphql,
  lightroom,
  materialui,
  nginx,
  numpy,
  opencv,
  "premiere pro": premierepro,
  pytorch,
  selenium,
  strapi,
  tensorflow,
  webix,
  wordpress,
  azure,
  blender,
  fastify,
  figma,
  flutter,
  haxe,
  ionic,
  markdown,
  "microsoft office": microsoftoffice,
  picsart,
  sketch,
  unity,
  wolframalpha,
  canva,
};

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  return skillIcons[skillID] || null;
};
