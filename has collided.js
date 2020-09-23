function hasCollided(lbullet, lwall) {

    bulletRightEdge = bullet.x + bullet.width;
    wallLeftEdge = lwall.x;

    if(bulletRightEdge>=wallLeftEdge) {
        return true;
    }

    return false;
    
}