<div class="d-none">
    <div class="ip2locfields">
        <input type="hidden" name="ip2loc_ip" value="" class="ip2loc_ip">
        <input type="hidden" name="ip2loc_isp" value="" class="ip2loc_isp">
        <input type="hidden" name="ip2loc_org" value="" class="ip2loc_org">
        <input type="hidden" name="ip2loc_country" value="" class="ip2loc_country">
        <input type="hidden" name="ip2loc_region" value="" class="ip2loc_region">
        <input type="hidden" name="ip2loc_city" value="" class="ip2loc_city">
        <input type="hidden" name="landing_page" value="<?php
                                                        $isHttps = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on');
                                                        $host = $_SERVER['HTTP_HOST'];
                                                        $uri = $_SERVER['REQUEST_URI'];
                                                        $fullUrl = ($isHttps ? 'https://' : 'http://') . $host . $uri;
                                                        echo $fullUrl;
                                                        ?>">
        <input type="hidden" name="server_ip" value="">
        <input type="hidden" name="referrer_url" value="">
        <input type="hidden" name="campaign_name" value="">
        <input type="hidden" name="campaign_email" value="">
        <input type="hidden" name="source" value="">
        <input type="hidden" name="campaign_category" value="">
        <input type="hidden" name="campaign_country" value="">
        <input type="hidden" name="campaign_phone" value="">
        <input type="hidden" name="campaign_offer" value="">
    </div>
    <input type="hidden" name="package_name" value="Get A Quote">
    <input type="hidden" name="lead_amount" value="0">
</div>