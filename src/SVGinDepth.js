import React, { Component } from 'react';
import './SVGinDepth.scss';
import SVGicon from './images/svg/icon.svg';
import SVGgraph from './images/svg/graph.png';
import SVGoldNavy from './images/svg/oldNavy.png';
import SVGsymbal from './images/svg/symbal.svg';
import SVGGreenPoly from './images/svg/greenPolygon.svg';
import SVGPurplePoly from './images/svg/purplePolygon.svg';
import SVGwebFont from './images/svg/webFont.svg';


import Gist from  'react-gist';

const script01 = document.createElement("script");
script01.src = "https://gist.github.com/avishai84/e85dce4a7364be1800ca4060858b8e0f.js";
const ss = document.body.appendChild(script01);


function Svg_Img_Example_01 (props){
  return(
      <svg version="1.1"
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 395 90" 
        xmlSpace="preserve" 
        className="ww">
        <title>SVG in depth</title>
        <desc>Prepared by Avishai Taashur, WCD 2016</desc>
      <g>
        <path style={{fill:'#FF7BAC',stroke:'#9E005D',strokeMiterlimit:10}} d="M3.263,23.174c0-10.931,6.069-17.292,13.313-17.292
          c1.893,0,3.72,0.358,5.025,0.806c1.305,0.448,2.219,0.896,2.872,0.896c0.718,0,1.175-0.717,1.501-1.344h4.83l4.829,8.96v18.816
          h-4.307l-5.874-7.526c-0.522-3.942-1.631-7.885-4.307-7.885c-2.35,0-3.459,1.882-3.459,4.569c0,2.33,0.587,3.853,4.96,5.914
          c9.202,4.39,14.553,12.723,14.553,26.252c0,11.29-6.265,18.816-12.792,18.816c-2.741,0-5.351-0.896-6.657-2.15
          c-1.044-0.985-2.153-1.792-3.002-1.792c-0.914,0-1.501,2.419-1.893,3.405H7.179l-4.373-7.796V43.692h5.743
          c1.109,3.226,2.872,7.078,3.916,8.78c1.24,2.15,3.263,4.301,5.743,4.301c1.371,0,3.263-1.074,3.263-3.404
          c0-3.315-5.417-4.928-8.027-6.899C8.875,42.976,3.263,35.359,3.263,23.174z M11.682,20.307c0-3.494,1.697-7.347,5.352-7.347
          c2.807,0,6.004,2.957,7.179,5.018c0.979,1.702,1.762,4.211,2.219,6.899h3.198V8.032h-3.198c-0.457,0.627-0.979,1.344-1.762,1.344
          c-0.979,0-1.958-0.448-3.002-0.896c-1.24-0.537-3.394-1.075-5.417-1.075c-6.461,0-11.747,5.914-11.747,15.411
          c0,8.96,2.35,13.978,8.223,17.383l5.09,2.867c2.154,1.254,5.613,3.404,5.613,8.512c0,3.584-2.023,6.81-4.764,6.81
          c-4.438,0-7.701-2.957-9.333-6.541c-1.044-2.24-1.697-4.211-2.023-6.63H4.046v19.264H7.31c0.587-1.612,1.305-3.405,2.349-3.405
          c1.044,0,2.219,0.807,3.72,1.793c1.436,0.985,3.654,2.15,6.134,2.15c6.657,0,11.747-6.811,11.747-16.935
          c0-10.752-3.785-15.591-12.334-19.085C13.966,27.027,11.617,25.414,11.682,20.307z M25.974,35.27c-2.088-0.717-3.328-0.717-4.503,0
          c-1.371-0.717-2.806-0.717-4.438,0c3.72,1.075,6.657,1.792,8.549,2.778c2.154,4.479,2.676,9.318,0.914,16.307
          c-0.13-6.81-2.349-11.827-4.699-12.723c-0.457-1.972-1.371-4.211-5.025-6.362c-1.305-0.717-2.807-0.717-4.112,0
          c-1.37-0.717-2.349-0.717-3.198,0c-2.937-3.315-3.785-6.989-3.785-12.455c0-8.512,4.895-13.888,10.442-13.888
          c1.697,0,3.133,0.179,4.373,0.627c1.305,0.538,3.002,1.344,4.307,1.344c0.979,0,1.632-0.717,2.023-1.344h1.697v13.799h-1.24
          c-0.848-6.093-5.156-11.917-10.246-11.917c-4.699,0-6.461,4.659-6.461,8.602c0,4.749,1.305,7.526,5.417,9.408
          C20.166,31.417,23.886,32.851,25.974,35.27z M17.033,35.091c-4.177-2.867-6.004-5.376-5.938-8.96
          c-1.697-1.613-2.48-4.301-2.415-9.318c-0.914,3.405-1.631,7.437-1.566,10.842c1.762,3.315,4.503,5.555,9.659,7.437H17.033z"/>
        <path style={{fill:'#FF7BAC',stroke:'#9E005D',strokeMiterlimit:10}} d="M54.3,11.168V6.419h14.814l4.83,8.781v7.079l-2.023,0.448
          c-1.566,0.358-2.806,2.419-3.524,5.914l-8.941,44.979H50.58l-4.177-7.527L39.812,19.77c-0.261-2.33-0.979-4.391-2.023-4.57
          l-2.741-0.538V6.419h17.425L54.3,11.168z M36.222,13.139l2.088,0.448c1.306,0.269,2.284,2.867,2.741,5.914l6.396,44.979h7.048
          l8.158-41.037c1.175-6.003,1.828-9.498,3.263-9.856l2.088-0.448V8.032H55.409v5.107l2.088,0.448
          c1.697,0.358,2.284,2.509,1.436,6.361l-5.939,30.374L48.492,19.5c-0.522-3.853,0-5.645,1.436-5.914l2.088-0.448V8.032H36.222
          V13.139z M50.841,9.555v1.972l-1.436,0.358c-1.958,0.358-2.937,2.777-2.088,8.691l2.154,14.694c-0.718-0.717-1.632-0.717-2.35,0
          c0.587,1.523,1.371,2.957,2.61,4.39c-0.522,4.928-0.326,9.856,0,14.694c-1.24-4.838-2.415-9.767-4.242-14.694
          c0.783-1.434,1.174-2.867,1.436-4.39c-1.044-0.717-1.827-0.717-2.284,0l-2.154-14.694c-0.783-5.555-2.023-8.333-3.85-8.691
          l-1.305-0.358V9.555H50.841z M47.121,35.181c0-2.15,0.457-4.211,1.044-6.272c-1.632-4.032-2.676-8.063-3.72-12.096
          c0.196,4.032,0.196,8.064-0.326,12.096c1.24,2.061,2.088,4.122,2.806,6.272H47.121z M56.192,22.547
          c-1.566,0-2.088,2.33-1.697,4.928l0.783,5.734l2.023-10.662H56.192z M66.83,9.555v1.972l-1.371,0.358
          c-1.566,0.358-2.61,4.301-3.524,8.691L58.999,35.27c-0.457-0.717-1.174-0.717-1.827,0l2.937-14.694
          c1.174-6.003-0.327-8.243-2.284-8.602l-1.24-0.269v-2.15H66.83z"/>
        <path style={{fill:'#FF7BAC',stroke:'#9E005D',strokeMiterlimit:10}} d="M104.555,73.619c-0.522-0.986-1.175-1.882-2.023-1.882
          c-0.783,0-1.697,0.358-2.937,1.075c-1.632,0.896-3.72,1.344-5.482,1.344c-10.312,0-19.252-13.351-19.252-31.539V27.654
          c0-12.634,6.526-21.773,14.292-21.773c2.415,0,4.111,0.538,5.678,1.434c1.044,0.717,2.088,1.613,2.61,1.613
          c0.392,0,0.522-1.344,0.522-2.688h5.939l5.482,8.512v25.356l3.263,4.928v9.946h-2.284c-1.109,0-1.958,0.896-1.958,2.956v15.681
          H104.555z M102.466,50.322c0-2.598,0.392-4.658,1.958-4.658h2.219v-6.81H93.264v6.81h1.044c1.305,0,2.349,1.344,2.349,4.748
          c0,7.438-3.067,8.871-5.874,8.871c-4.177,0-5.938-7.258-5.938-12.275V23.174c0-5.018,0.783-9.945,4.699-9.945
          c5.09,0,7.113,12.275,7.179,21.146h6.722V7.763h-4.438c0,1.165-0.261,2.867-1.044,2.867c-0.979,0-2.088-0.896-3.132-1.523
          c-1.631-1.075-3.394-1.703-5.286-1.703c-8.549,0-13.509,10.125-13.509,20.25v14.963c0,10.932,3.916,22.4,13.705,22.4
          c2.088,0,4.111-0.27,5.156-0.896c1.044-0.627,1.958-1.254,2.675-1.254c0.718,0,1.175,0.806,1.436,1.612h3.459V50.322z
          M77.145,28.819c0-10.573,4.83-19.891,12.4-19.891c1.958,0,3.589,0.807,4.829,1.613c1.305,0.986,2.48,1.703,3.916,1.703
          c0.979,0,1.893-1.523,1.893-2.867h2.088v23.475h-4.373c-0.457-11.2-3.002-21.235-8.354-21.235c-4.96,0-5.874,5.824-5.874,11.558
          V35.27c-0.979-0.717-2.023-0.717-3.133,0c0.326,1.254,1.109,3.046,1.958,4.39c-0.587,3.674-0.979,8.602-1.175,14.694
          c-1.24-5.734-2.219-10.841-3.002-14.694c0.914-1.344,1.631-3.136,2.023-4.39c-1.24-0.717-2.284-0.717-3.198,0V28.819z
          M80.538,35.181c0.326-3.226,1.109-4.928,1.958-6.272c-1.109-3.584-1.109-7.257-0.587-12.096
          c-1.893,4.122-2.741,8.602-3.589,12.096c0.914,1.344,1.631,3.047,2.023,6.272H80.538z M95.614,35.001
          c-0.457-12.454-1.697-14.784-3.133-14.784c-1.631,0-1.697,2.509-1.697,6.541v24.998c0,2.33,0.914,4.48,2.48,4.48
          c1.632,0,2.284-2.419,2.284-5.824c0-2.24-1.24-3.226-2.349-3.226h-1.11v-9.855h4.96L95.614,35.001z"/>
        <path style={{fill:'#FF7BAC',stroke:'#9E005D',strokeMiterlimit:10}} d="M128.77,20.755c0-4.122-0.914-5.376-2.154-5.555l-2.088-0.538
          V6.419h18.078l4.829,8.781v7.079l-2.023,0.448c-1.175,0.179-2.219,2.061-2.219,6.899v29.568l4.242,7.615v6.811h-18.73l-4.177-7.527
          V57.85l2.545-0.538c1.24-0.358,1.697-2.867,1.697-6.003V20.755z M129.879,51.756c0,4.122-0.522,6.721-2.088,7.168l-2.088,0.448
          v5.107h15.793v-5.107l-2.088-0.448c-1.632-0.447-2.154-3.046-2.154-7.168V20.755c0-4.211,0.783-6.81,2.088-7.168l2.088-0.448V8.032
          h-15.728v5.107l2.088,0.448c1.305,0.358,2.088,2.957,2.088,7.168V51.756z M136.079,35.27c-0.652-0.717-1.566-0.717-2.415,0
          c0.392,1.165,1.109,3.046,2.088,4.39c-0.979,2.957-1.697,7.078-2.154,14.694c-0.457-7.616-1.175-11.737-2.153-14.694
          c0.979-1.344,1.697-3.226,2.023-4.39c-0.914-0.717-1.762-0.717-2.415,0V20.755c0-6.81-1.371-8.512-2.545-8.87l-1.697-0.358V9.555
          h13.509v1.972l-1.697,0.358c-1.175,0.358-2.545,2.061-2.545,8.87V35.27z M133.664,35.181c0.392-3.136,1.109-4.928,2.088-6.272
          c-0.979-2.15-1.697-5.376-2.154-12.096c-0.457,6.72-1.175,9.945-2.153,12.096c0.979,1.344,1.697,3.136,2.023,6.272H133.664z"/>
        <path style={{fill:'#FF7BAC',stroke:'#9E005D',strokeMiterlimit:10}} d="M171.452,73.619l-4.503-8.244l-4.307-16.486v9.946l3.589,6.54
          v8.244h-14.945l-4.177-7.527V57.85l2.545-0.538c1.24-0.358,1.697-2.867,1.697-6.003V20.755c0-4.122-0.914-5.376-2.154-5.555
          l-2.088-0.538V6.419h16.707l2.415,4.391V6.419h14.88l4.829,8.781v7.079l-2.023,0.448c-1.175,0.179-2.154,2.061-2.154,6.899v43.994
          H171.452z M156.638,20.755h0.13l11.421,43.725h7.57V20.755c0-4.211,0.783-6.81,2.154-7.168l2.023-0.448V8.032h-12.53v5.107
          l2.088,0.448c1.305,0.358,2.088,2.957,2.088,7.168v19.443h-0.065l-8.614-32.167h-14.619v5.107l2.088,0.448
          c1.305,0.358,2.088,2.957,2.088,7.168v31.001c0,4.122-0.522,6.721-2.088,7.168l-2.088,0.448v5.107h11.943v-5.107l-1.436-0.448
          c-1.631-0.537-2.153-3.046-2.153-7.168V20.755z M161.924,9.555l6.853,25.715c-1.24-0.717-2.35-0.717-3.394,0
          c0.652,1.165,1.631,2.688,3.002,4.39c0.13,3.137,0.522,6.989,1.631,14.694c-2.48-7.437-4.177-11.558-5.678-14.694
          c0.522-1.612,0.849-3.226,0.849-4.39c-1.371-0.717-2.415-0.717-3.198,0l-3.916-14.784c-0.392-1.613-0.783-2.599-1.631-2.599
          c-0.783,0-0.914,1.344-0.914,2.688V35.27c-0.587-0.717-1.371-0.717-1.893,0V20.755c0-6.81-1.371-8.512-2.545-8.87l-1.697-0.358
          V9.555H161.924z M165.383,35.181c0-3.136,0-4.928,0.065-6.81c-1.762-2.867-3.328-6.362-5.547-12.275
          c1.24,6.003,1.697,9.677,1.305,12.812c1.501,1.344,2.545,3.136,3.981,6.272H165.383z M178.827,9.555v1.972l-1.697,0.358
          c-1.175,0.358-2.545,2.061-2.545,8.87V35.27c-0.392-0.717-1.371-0.717-1.827,0V20.755c0-6.81-1.371-8.512-2.545-8.87l-1.697-0.358
          V9.555H178.827z"/>
        <path style={{fill:'#FF7BAC',stroke:'#9E005D',strokeMiterlimit:10}} d="M200.822,32.761l2.807,5.645v7.795h-14.684l-2.284-4.301
          v-9.139H200.822z M187.705,40.735h12.334v-6.81h-12.334V40.735z M198.93,35.27v4.122h-10.246V35.27H198.93z"/>
        <path style={{fill:'#FF7BAC',stroke:'#9E005D',strokeMiterlimit:10}} d="M208.198,20.755c0-4.122-0.914-5.376-2.154-5.555l-2.088-0.538
          V6.419h20.166c10.572,0,19.057,16.396,19.057,37.812c0,17.113-8.811,29.389-16.251,29.389h-18.795l-4.177-7.527V57.85l2.545-0.538
          c1.24-0.358,1.697-2.867,1.697-6.003V20.755z M209.308,51.756c0,4.122-0.522,6.721-2.089,7.168l-2.088,0.448v5.107h16.119
          c9.202,0,15.989-12.275,15.989-27.597c0-20.877-5.678-28.851-13.705-28.851h-18.403v5.107l2.088,0.448
          c1.306,0.358,2.089,2.957,2.089,7.168V51.756z M210.482,20.755c0-6.81-1.371-8.512-2.545-8.87l-1.697-0.358V9.555H223.6
          c10.899,0,12.204,15.501,12.465,25.715c-0.913-0.717-1.827-0.717-3.132,0c0.718,1.254,1.501,2.957,1.827,4.39
          c-0.457,5.107-2.415,9.767-5.417,14.694c1.827-5.734,2.153-10.394,1.109-14.694c0.979-1.075,1.958-2.688,2.219-4.39
          c-1.175-0.717-2.219-0.717-3.002,0c0.262-17.831-2.545-22.4-6.656-22.4h-4.308c-2.61,0-3.197,3.853-3.197,8.333V35.27
          c-0.783-0.717-1.566-0.717-2.48,0c0.326,1.165,1.109,3.046,2.023,4.39c-0.914,2.957-1.697,7.078-2.089,14.694
          c-0.521-7.616-1.239-11.737-2.088-14.694c0.849-1.344,1.566-3.226,1.958-4.39c-0.979-0.717-1.763-0.717-2.35,0V20.755z
          M213.027,35.181c0.457-3.136,1.175-4.928,2.023-6.272c-0.849-2.15-1.566-5.376-2.089-12.096c-0.521,6.72-1.239,9.945-2.088,12.096
          c0.849,1.344,1.566,3.136,1.958,6.272H213.027z M223.339,14.394c2.807,0,5.091,3.584,5.091,21.593
          c0,8.781-1.958,22.042-6.723,22.042h-3.002c-1.37,0-2.023-2.15-2.023-6.272V21.203c0-4.122,0.131-6.81,2.22-6.81H223.339z
          M224.383,23.532c-0.979,0-1.762,1.613-1.762,4.211v25.715c0,0.807,0.261,1.612,0.913,1.612c0.783,0,3.785-8.512,3.785-19.084
          c0-9.139-0.456-12.455-1.436-12.455H224.383z M232.933,35.181c0.718-1.882,1.305-4.122,1.827-6.272
          c-0.588-2.598-1.566-5.824-3.851-12.096c0.718,6.63,0.718,9.856-0.457,12.096c1.175,1.613,2.023,4.211,2.219,6.272H232.933z"/>
        <path style={{fill:'#FF7BAC',stroke:'#9E005D',strokeMiterlimit:10}} d="M245.465,15.2l-2.088-0.538V6.419h27.736l5.091,9.139v21.146
          h-6.853l-4.373-7.885v-3.136c0-1.881-0.326-2.957-1.37-2.957c-1.109,0-1.632,1.434-1.566,3.136l0.065,2.24l5.743,10.483v4.032
          h3.263l5.091,9.318v21.684h-28.65l-4.177-7.527V57.85l2.545-0.538c1.24-0.358,1.697-2.867,1.697-6.003V20.755
          C247.619,16.633,246.705,15.379,245.465,15.2z M262.563,37.868v-6.361h-6.461V19.859c0-4.122,0.979-6.272,4.308-6.272
          c3.067,0,5.678,3.494,5.678,10.214v3.763h4.111V8.032h-25.647v5.107l2.088,0.448c1.306,0.358,2.089,2.957,2.089,7.168v31.001
          c0,4.122-0.522,6.811-2.089,7.168l-2.088,0.448v5.107h25.647V44.23h-4.111v4.39c0,5.556-1.109,10.125-5.678,10.125
          c-3.328,0-4.308-2.599-4.308-6.183V37.868H262.563z M269.09,9.555v16.486h-1.827v-2.24c0-9.318-3.916-11.738-6.853-11.738
          c-4.372,0-5.481,3.942-5.481,7.795V33.12h6.525v2.15c-1.501-0.717-3.197-0.627-4.503,0.089c-1.37-0.717-2.937-0.806-4.438-0.089
          c0.392,1.165,1.109,3.046,2.088,4.39c-0.979,2.957-1.696,7.078-2.153,14.694c-0.457-7.616-1.175-11.737-2.153-14.694
          c0.979-1.344,1.696-3.226,2.022-4.39c-0.913-0.717-1.827-0.717-2.414,0V20.755c0-6.81-1.371-8.512-2.546-8.87l-1.696-0.358V9.555
          H269.09z M252.514,35.181c0.392-3.136,1.109-4.928,2.023-6.272c-0.914-2.15-1.632-5.376-2.089-12.096
          c-0.457,6.72-1.175,9.945-2.153,12.096c0.979,1.344,1.696,3.136,2.022,6.272H252.514z M262.042,53.101
          c0,1.434,0.261,2.777,0.913,2.777c0.783,0,2.023-2.15,2.023-7.437v-1.434h-2.937V53.101z"/>
        <path style={{fill:'#FF7BAC',stroke:'#9E005D',strokeMiterlimit:10}} d="M299.896,66.809v6.811h-18.73l-4.177-7.527V57.85l2.545-0.538
          c1.24-0.358,1.697-2.867,1.697-6.003V20.755c0-4.122-0.914-5.376-2.154-5.555l-2.088-0.538V6.419h20.166
          c10.377,0,17.882,14.067,17.882,24.909c0,12.365-6.592,18.278-14.162,18.189l-5.221-0.09v9.767L299.896,66.809z M295.85,39.84
          c7.506,0,13.053-4.659,13.118-15.143c0.065-11.827-4.373-16.666-12.4-16.666h-18.403v5.107l2.088,0.448
          c1.306,0.358,2.089,2.957,2.089,7.168v31.001c0,4.122-0.522,6.721-2.089,7.168l-2.088,0.448v5.107h15.793v-5.107l-2.088-0.448
          c-1.632-0.447-2.154-3.046-2.154-7.168V39.84H295.85z M283.516,20.755c0-6.81-1.371-8.512-2.545-8.87l-1.697-0.358V9.555h17.229
          c6.787,0,11.29,3.674,11.29,15.232c0,4.838-1.501,8.333-3.394,10.394c-0.979-0.717-1.436-0.627-3.002,0.089
          c-1.24-0.717-2.415-0.717-3.655,0c-1.37-0.717-2.676-0.717-3.98,0c-1.24-0.717-2.676-0.717-3.981,0
          c-1.305-0.717-2.414-0.717-3.72,0c0.392,1.165,1.109,3.046,2.089,4.39c-0.979,2.957-1.697,7.078-2.154,14.694
          c-0.457-7.616-1.109-11.737-2.088-14.694c0.979-1.344,1.631-3.226,1.958-4.39c-0.914-0.717-1.697-0.717-2.35,0V20.755z
          M286.061,35.181c0.326-3.136,1.109-4.928,1.958-6.272c-0.849-2.15-1.632-5.376-2.089-12.096c-0.456,6.72-1.174,9.945-2.022,12.096
          c0.849,1.344,1.566,3.136,1.893,6.272H286.061z M288.541,32.851h7.962c3.458,0,5.678-3.853,5.678-9.049
          c0-6.272-2.546-9.498-5.809-9.498h-3.394c-2.676,0-4.438,1.523-4.438,6.899V32.851z M289.715,21.203
          c0-4.211,1.24-5.376,3.133-5.376h3.72c2.154,0,4.438,2.329,4.438,7.974c0,4.301-2.284,7.437-4.438,7.437h-6.853V21.203z
          M297.221,24.966c-0.783,0-1.566,0.986-1.566,2.778v2.33h0.849c1.565,0,2.937-2.24,2.937-3.584c0-0.985-0.392-1.523-1.044-1.523
          H297.221z M301.527,35.181c1.632-1.972,3.329-4.211,4.83-6.272c0.064-3.046-0.849-6.81-2.415-12.096
          c0.849,6.361,0.131,10.304-1.24,12.096c0.262,1.882-0.065,3.853-1.436,6.272H301.527z"/>
        <path style={{fill:'#FF7BAC',stroke:'#9E005D',strokeMiterlimit:10}} d="M351.586,15.2v24.46h-6.265l-4.111-7.526v27.06l4.177,7.615
          v6.811h-18.665l-4.177-7.527V57.85l2.479-0.538c1.306-0.358,1.697-2.867,1.697-6.003V39.66h-4.308l-6.069-7.526V6.419h30.412
          L351.586,15.2z M317.52,30.521h3.851v-5.018c0-5.287,0.979-11.11,3.785-11.11c2.479,0,2.741,5.286,2.741,8.691v28.671
          c0,4.122-0.522,6.721-2.154,7.168l-2.088,0.448v5.107h15.793v-5.107l-2.022-0.448c-1.697-0.447-2.219-3.046-2.219-7.168V23.084
          c0-3.405,0.261-8.691,2.74-8.691c2.807,0,3.785,5.824,3.785,11.11v5.018h3.851V8.032H317.52V30.521z M344.473,9.555v19.443h-1.632
          v-3.136c0-5.645-0.848-12.992-4.895-12.992c-2.806,0-3.851,3.226-3.851,8.602V35.27c-0.587-0.717-1.501-0.717-2.414,0
          c0.392,1.165,1.109,3.046,2.023,4.39c-0.914,2.957-1.632,7.078-2.154,14.694c-0.457-7.616-1.175-11.737-2.088-14.694
          c0.913-1.344,1.631-3.226,2.022-4.39c-0.848-0.717-1.762-0.717-2.479,0V21.472c0-5.376-1.044-8.602-3.851-8.602
          c-4.046,0-4.895,7.347-4.895,12.992v3.136h-1.632V9.555H344.473z M331.682,35.181c0.392-3.136,1.109-4.928,1.958-6.272
          c-0.849-2.15-1.566-5.376-2.089-12.096c-0.457,6.72-1.175,9.945-2.088,12.096c0.913,1.344,1.631,3.136,2.022,6.272H331.682z"/>
        <path style={{fill:'#FF7BAC',stroke:'#9E005D',strokeMiterlimit:10}} d="M355.7,20.755c0-4.122-0.914-5.376-2.154-5.555l-2.088-0.538
          V6.419h36.09l4.829,8.781v7.079l-2.022,0.448c-1.175,0.179-2.22,2.061-2.22,6.899v29.568l4.242,7.615v6.811h-17.099l-1.37-2.062
          v2.062h-18.273l-4.177-7.527V57.85l2.545-0.538c1.24-0.358,1.697-2.867,1.697-6.003V20.755z M364.184,20.755
          c0-4.211,0.783-6.81,2.154-7.168l2.022-0.448V8.032h-15.728v5.107l2.088,0.448c1.306,0.358,2.089,2.957,2.089,7.168v31.001
          c0,4.122-0.522,6.721-2.089,7.168l-2.088,0.448v5.107h15.793v-5.107l-2.088-0.448c-1.632-0.447-2.154-3.046-2.154-7.168V39.481
          h10.703v12.274c0,4.122-0.521,6.721-2.219,7.168l-2.023,0.448v5.107h15.729v-5.107l-2.023-0.448
          c-1.631-0.447-2.153-3.046-2.153-7.168V20.755c0-4.211,0.783-6.81,2.153-7.168l2.023-0.448V8.032h-15.729v5.107l2.023,0.448
          c1.436,0.358,2.219,2.957,2.219,7.168v10.842h-10.703V20.755z M385.264,9.555v1.972l-1.697,0.358
          c-1.631,0.358-2.545,3.673-2.545,8.87V35.27c-0.521-0.717-1.436-0.717-2.35,0c0.262,1.165,1.045,3.046,1.958,4.39
          c-0.913,2.957-1.696,7.078-2.153,14.694c-0.392-7.616-1.175-11.737-2.089-14.694c0.914-1.344,1.697-3.226,2.023-4.39
          c-1.501-0.717-3.002-0.717-4.503,0c-1.436-0.717-2.937-0.717-4.373,0c-1.501-0.717-3.002-0.717-4.438,0
          c-1.501-0.717-2.937-0.717-4.503,0c0.392,1.165,1.109,3.046,2.023,4.39c-0.914,2.957-1.632,7.078-2.089,14.694
          c-0.457-7.616-1.175-11.737-2.153-14.694c0.979-1.344,1.696-3.226,2.022-4.39c-0.979-0.717-1.893-0.717-2.414,0V20.755
          c0-5.197-0.914-8.512-2.545-8.87l-1.697-0.358V9.555h13.509v1.972l-1.696,0.358c-1.632,0.358-2.545,3.673-2.545,8.87v12.454h12.986
          V20.755c0-5.197-0.848-8.512-2.545-8.87l-1.632-0.358V9.555H385.264z M360.595,35.181c0.392-3.136,1.109-4.928,2.023-6.272
          c-0.914-2.15-1.632-5.376-2.089-12.096c-0.457,6.72-1.175,9.945-2.153,12.096c0.979,1.344,1.696,3.136,2.022,6.272H360.595z
          M373.712,30.073v-7.795l-1.436,0.269c-1.566,0.269-2.153,2.24-2.153,6.63v0.896H373.712z M370.123,57.85l2.284-0.538
          c0.913-0.269,1.305-1.792,1.305-5.556v-3.225h-3.589V57.85z M378.672,35.181c0.262-3.136,1.045-4.928,1.958-6.272
          c-0.913-2.15-1.696-5.376-2.153-12.096c-0.392,6.72-1.175,9.945-2.089,12.096c0.914,1.344,1.697,3.136,2.023,6.272H378.672z"/>
      </g>
    </svg>
  );
}




class SVGinDepth extends Component {

  render() {
    return (
      <div className="SVGinDepth">
        <div className="container">
          <div className="well">
            <Svg_Img_Example_01/>
            <p>Presented By Avishai for Avishai </p> 
          </div>
          <section>
            <h3>Objectives</h3>
            <ol>
              <li>Understanding what is Scalable Vector Graphics - (SVG)</li>
              <li>Learning how to create and read the SVG document</li>
              <li>Example of manipulating SVG with CSS</li>
            </ol>
          </section>

          {/* Image tag SVG */}
          <section>
            <h3>Working with image tag</h3>
            <div className="canvas">
              <code>img src="icon.svg" alt="computer icon"</code><br/><br/>
              <img src={SVGicon} alt="computer icon" />
            </div>
          </section>
          {/* Inline SVG */}
          <section>
            <h3>Img Tag Verses Inline SVG</h3>
            <ol>
              <li><code>img</code> element pointing to SVG can't be manipulated with CSS
              </li>
              <li>Inline SVG can be manipulated with CSS and Javascript (inner elements are accessible)
              </li>
            </ol>
          </section>
          <section>
            <h3>Inline SVG with CSS targeting circle element</h3>
            <div className="gistOne"><Gist id='e85dce4a7364be1800ca4060858b8e0f'/></div>
          </section>
        {/* Responssive SVG */}

        <section>
	        <h3>responsive SVG</h3>
	        <h3>viewport and viewbox are two seperate cordinante systems.</h3>
	        <ul>
            <li>The viewport is the outer area of the SVG canves. (Target as SVG in CSS)</li>
            <li>The viewBox is the canves itself.</li>
            <li>To make element responsive, copy the height and width from element such as <code>rect</code>to the viewBox</li>
              <li>viewBox = (read: x, y, width, height)</li>
            <li>give the viewport responsive value in the CSS: width:30%, height:auto </li>
          </ul>
          <div className="gistTwo"><Gist id='20f16bff41c50510a525e82d2775674c'/></div>
	      	<img src={SVGgraph} alt="graph"/>
        </section>

        {/* Respnssive */}
        <section>
          <h3>I am responsive</h3>
          <p>To make an element responsive, move the height and width to the viewBox.</p>
          <div className="canvas">
            <code>svg</code><code>viewBox=0 0 100 120</code>
          </div>
          <div className="gistThree"><Gist id='3452ae96fa2c63533355b632ca82266c'/></div>
      </section>

        {/* Accessibility */}
        <section>
          <h3>Accessibility: description tags and title in SVG Element</h3>
          <ul>
            <li><code>title</code>Providing short title.</li>
            <li><code>desc</code>Describing what the image shows.</li>
            <li>CSS style tag is allow inside the desc.</li>
          </ul>
          <div className="gistFour"><Gist id='1c9f9ab7f678722fad7dfb22f59229b4'/></div>
          <img style={{"width":"100%", "display":"block"}} src={SVGoldNavy} alt="old navy" />
        </section>
        {/* Groups and symbales */}
        <section>
          <h3>Group, symbol &amp; path</h3>
          <ul>
              <li>Group <code>g</code> a group container can contain nested groups and SVG elements.</li>
              <li>Symbol <code>symbol</code>Define graphical template objects which can be instantiated multiple times.</li>
              <li>Path <code>path</code>Describing the vector points that draws the image.</li>
            </ul>
        </section>
        {/* Groups */}
        <section>
          <h3>Groups</h3>
          <p>Group container can contain nested SVG and other group elements. CSS trasform can be applied to a group container.</p>
          <div className="gistFive"><Gist id='18d38962da1cfe50d82d1e950f855cdf'/></div>
        </section>
        {/* Symbal */}

        <section>
          <h3>Symbols</h3>
          <p>Symbol <code>symbol</code>Define graphical template objects which can be instantiated multiple times.</p>
          <p>A basic use will look like this:</p>
          <ol>
            <li>Open <code>symbol element </code> and give it a unique ID. <code>symbol viewBox="0 0 100 100" <span>id="symb1"</span></code></li>
            <li>Place an element inside the symbol such as circle.</li>
            <li>To invoke the symbol write the <code>use</code> tag.</li>
            <li>Call the unique ID in the xlink href path. <code>use xlink:href="<span >#symb1"</span></code></li>
          </ol>
          <div className="gistSix"><Gist id='90ea3d4c37adaa49a1faf9ab5f70ed57'/></div>
          <img style={{"width":"100%", "display":"block"}} src={SVGsymbal} alt="old navy" />
       </section>
        {/* path */}


        <section>
          <h3>Paths</h3>
          <p>Describing the vector points that draws the image.</p>
          <p><code>path d=</code> is another way of drawing points.</p>
          <ul>
            <li>M = start of the path</li>
            <li>L = where points are specified</li>
            <li>Z= signify the end of the path</li>
          </ul>
            <div className="canvas">
              <h3>Using polygon</h3>
              <code>polygon points="7, 10 12,0 17, 10" fill="green"</code>
            </div>
            <img style={{"width":"100%", "display":"block"}} src={SVGGreenPoly} alt="polygon" />
            <br/>
            <h3>Using path</h3>
			        <code>path d="M7, 10 L7,10 L12,0 L17, 10 Z" fill="purple"</code>
            <img style={{"width":"100%", "display":"block"}} src={SVGPurplePoly} alt="polygon" />
        </section>
        {/* Web font */}
        <section>
	        <h3>Can SVG replace web fonts?</h3>
          <img style={{"width":"100%", "display":"block"}} src={SVGwebFont} alt="polygon" />
        </section>
        </div>
      </div>
    );
  }
}

export default SVGinDepth;
