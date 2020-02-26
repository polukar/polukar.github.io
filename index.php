<?
$path = ".";
$filelist = array();

if($handle = opendir($path)){
    while($entry = readdir($handle)){
        if ( !is_dir( $entry ) ) {
            echo '<div><a style="color: #1a0dab; display: block; padding: 5px 0;" target="_blank" href="'.$entry.'">'.$entry.'</a></div>';
        }
    }
    
    closedir($handle);
}
?>