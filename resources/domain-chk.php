
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
<meta http-equiv="cache-control" content="max-age=0" />
<meta http-equiv="cache-control" content="no-cache" />
<meta http-equiv="expires" content="0" />
<meta http-equiv="pragma" content="no-cache" />
<meta name="robots" content="noindex,nofollow">
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700" rel="stylesheet">
<link rel="stylesheet" href="domain-chk.css">

<div id="table-container">
<div id="container">
<div id="main">
<div id="somebackground">
<div id="base" class="contentBase">
<h1>Check Domain Availability</h1>
<form action="" method="post">
<input class="inputx" type="text" name="domain_name" value="domain-name"/><span class="dot">.</span><input class="selectx" type="text" name="ubhbz" value="com"/>
<input class="button" type="submit" name="check" value="Check" />
</form>
    
<div class="msg">
<span>
    <?php
    if(isset($_POST['check'])) {

     if (!empty($_POST['domain_name'])){
     $name_domain = trim($_POST['domain_name']).'.'.$_POST['ubhbz'];
     $response = @dns_get_record($name_domain, DNS_ALL);
     if(empty($response)){
     echo "<h3>Congratulations!<br><span>$name_domain</span>has 99.9% chances of availability</h3>";

     }else{
     echo "<h4>Try something else!<br><span>$name_domain</span> has taken</h4>";
     }
     }
     else {
     echo "<h4>Error please enter domain name</h4>";
     }
    }
    ?>
</span>
</div>

</div>
</div>
</div>
</div>
</div>