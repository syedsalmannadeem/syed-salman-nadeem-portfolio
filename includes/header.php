<?php 
include("./config.php");
include("./functions.php");

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <script src="https://cdn.tailwindcss.com"></script> 
    <link rel="canonical" href="<? 
        $isHttps = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on');
        $host = $_SERVER['HTTP_HOST'];
        $uri = $_SERVER['REQUEST_URI'];
        $fullUrl = ($isHttps ? 'https://' : 'http://') . $host . $uri;
        echo $fullUrl;
    ?>">
    <?php include('includes/meta-tags.php') ?>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="icon" href="assets/images/favicon.webp">
    <style>
            #modalExitIntent{z-index:999999}#modalExitIntent .form-control::placeholder{font-size:14px!important;color:#471070!important}.modalMegaSurprise .input-group-text{padding-top:15px}#modalExitIntent textarea{padding-top:12px}.footerparticle{right:-40px;bottom:-52px;width:23%}@media only screen and (max-width:1530px){.character-position img{opacity:.5}}.combopackage-section .particleLeft{z-index:1}#visual-design-and-graphic-design{z-index:auto}#modalExitIntent button.close{position:absolute;top:0;right:0;color:#fff;border:none;width:50px;height:50px;border-bottom-left-radius:10px;background:linear-gradient(270deg,#ad05ed,#5430f8);font-size:25px;text-shadow:-1px 4px 6px #0000005e}.exit-intent-popup-ssn{position:fixed;top:0;left:0;bottom:0;right:0;z-index:1;background:rgba(33,33,33,.8);transform:translateY(60%) scale(0);transition:transform .3s cubic-bezier(.4, 0, .2, 1)}.exit-intent-popup-ssn.visible{transform:translateY(0) scale(1)}.newsletter-ssn{position:absolute;top:0;left:0;background:#fff;height:100%;width:100%;text-align:center;overflow:hidden;color:#000;padding:0;z-index:999999;display:flex;align-items:center;justify-content:center}.newsletter-ssn .close-ssn{position:absolute;top:10px;right:10px;color:#471070;border:2px solid #fff;width:42px;border-radius:100%;height:42px;background:0 0;font-size:20px}.form-checkbox{display:flex;flex-wrap:wrap;gap:10px}.form-checkbox label{display:flex;align-items:start;cursor:pointer;font-size:12px;color:#dfdfdf;line-height:25px;max-width:500px}.form-checkbox input[type=checkbox]{display:none}.form-checkbox label span{margin-top:5px;display:inline-block;width:80px;height:20px;margin-right:8px;border:2px solid #ccc;border-radius:4px;transition:.3s;position:relative}.form-checkbox input[type=checkbox]:checked+span{border-color:#87c33f;background-color:#87c33f;margin-top:5px}.form-checkbox input[type=checkbox]:checked+span::after{content:'';position:absolute;top:50%;left:50%;width:5px;height:10px;border:solid #fff;border-width:0 2px 2px 0;transform:translate(-50%,-50%) rotate(45deg)!important}.move-right-animation{animation:3s ease-in-out infinite moveLeftToRight}@keyframes moveLeftToRight{0%,100%{transform:translateX(-5px)}50%{transform:translateX(5px)}}
    </style>
     <style>
        .typewriter {
            display: inline-block;
            min-width: 200px;
            height: auto;
            text-align: left;
            white-space: nowrap;
        }
    </style>
        <style>
        .custom-scrollbar {
            list-style-type: none;
            position: relative;
        }

        .custom-scrollbar li {
            position: relative;
            padding-left: 2rem;
        }

        .custom-scrollbar li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 1.2rem;
            height: 1.2rem;
            background-image: url('assets/images/tick.webp');
            background-size: contain;
            background-repeat: no-repeat;
        }
        .aria-selected\:text-\[\#fff\]\/20[aria-selected="true"] {
    color: #d8b308 !important;
}
.aria-selected\:text-\[\#fff\]\/20[aria-selected="false"] {
    color: #ffffff !important;
}
    </style>
    <style>
    @media (max-width: 768px) {
    .dot {
        display: none !important;
    }
}
    .writing-mode {
        writing-mode: vertical-lr;
    }
</style>
</head>

    <body class="bg-[#F4F4F4] overflow-x-hidden ">