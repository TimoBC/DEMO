<?php
echo company_email_regex('asus','awfpeafwq@asus.com.tw');

function company_email_regex($company,$email) {
	$companyMap = array(
		'asus' => '/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@asus[A-Za-z0-9-]*(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/',
	);
	preg_match($companyMap[$company],$email);
}
?>