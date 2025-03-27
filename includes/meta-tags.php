<?php 
    $requestUri = $_SERVER['REQUEST_URI'];
    
    if (strpos($requestUri, '/portfolio') !== false) {
        $title = "Portfolio | Aussie Logo";
        $metaDescription = "Aussie Logo is wide-ranging design solution service. Here, you will get the best designers for all sort of graphical representations at affordable prices.";
        $metaKeywords = "";
    }
     elseif (strpos($requestUri, '/about') !== false) {
        $title = "About Us - Best Online Professional Custom Design Solutions | Aussie Logo";
        $metaDescription = "Aussie Logo is wide-ranging design solution service. Here, you will get the best designers for all sort of graphical representations at affordable prices.";
        $metaKeywords = "";
    }
    elseif (strpos($requestUri, '/contact') !== false) {
        $title = "Contact Us | Aussie Logo";
        $metaDescription = "Aussie Logo Contact us";
        $metaKeywords = "";
    } 
    elseif (strpos($requestUri, '/website-design') !== false) {
        $title = "Professional & Cheap Custom Web Design Service | Aussie Logo";
        $metaDescription = "Cheap Web Design Company – Get high quality and affordable professional website design from professional custom web design service at cheap!";
        $metaKeywords = "";
    }
    elseif (strpos($requestUri, '/stationary') !== false) {
        $title = "Business Stationery Design Services | Stationery Design Packages";
        $metaDescription = "Best Corporate Stationery Design Service and Packages for your business.";
        $metaKeywords = "";
    }
    elseif (strpos($requestUri, '/social-media-design') !== false) {
        $title = "Appealing Graphics for Social Media Designs at Low Prices | Aussie Logo";
        $metaDescription = "Social media is ever popular medium so get professional social media design with engaging social media graphic designs at low prices &amp; unlimited revisions.";
        $metaKeywords = "";
    }
    elseif (strpos($requestUri, '/content-writing') !== false) {
        $title = "SEO Optimized Article &amp; Website Content Writing Services | Aussie Logo";
        $metaDescription = "We offer SEO optimized best article writing service and website content writing services i.e. copywriting, eBooks, press releases, newsletters, product descriptions.";
        $metaKeywords = "";
    }
    elseif (strpos($requestUri, '/privacy-policy') !== false) {
        $title = "Privacy Policy | Aussie Logo";
        $metaDescription = "Aussie Logo is wide-ranging design solution service. Here, you will get the best designers for all sort of graphical representations at affordable prices.";
        $metaKeywords = "";
    }
    elseif (strpos($requestUri, '/term-and-condition') !== false) {
        $title = "Term And Condition| Aussie Logo";
        $metaDescription = "Aussie Logo is wide-ranging design solution service. Here, you will get the best designers for all sort of graphical representations at affordable prices.";
        $metaKeywords = "";
    }
     elseif (strpos($requestUri, '/404') !== false) {
        $title = "";
        $metaDescription = "404 - Page Not Found";
        $metaKeywords = "404 - Page Not Found";
    }
    else{
        $title = "Logo Design | Professional & Custom Logo Design Services in Australia Company";
        $metaDescription = "Aussie Logo Australia is a leading Logo Design Company offering affordable custom logo design services by professionals Logo Designers in Australia!";
        $metaKeywords = "";
    }
    
    ?><title><?php echo $title;?></title>
    <meta name="description" content="<?php echo $metaDescription; ?>">
    <meta name="keywords" content="<?php echo $metaKeywords; ?>">
