update houses set image_url=$2 where house_id=$1
returning *;